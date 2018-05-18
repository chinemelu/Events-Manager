import React from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import validateFrontEnd from '../../server/validation/frontEndValidation';
import TextFieldGroup from './TextFieldGroup.jsx';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      reEnterPassword:'',
      errors: {},
      isLoading: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.userExists = this.userExists.bind(this);
    this.thisError = {}
  }

  onChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  userExists(event) {
    const field = event.target.name.trim().toLowerCase();
    const value = event.target.value.trim().toLowerCase();
    if (value !== '') {
      const { errors, isValid } = validateFrontEnd(this.state)
      if (errors[field]){
        this.thisError[field] = errors[field]
        this.setState ({ errors: this.thisError })
      } else {
        this.props.checkUserExists(value).then((res) => {
          let { errors } = this.state;
          let invalid;
          if (res.data.user && field !== 'password'){
            errors[field] = `${field} already exists`
          } else {
            delete errors[field]
          }
          this.setState({ errors, invalid: !isEmpty(errors) })
        })
      }
    }
  }

  isValid() {
    const { errors, isValid } = validateFrontEnd(this.state)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true})
      this.props.userSignUpRequest(this.state)
      .then(() => {
        this.props.clearFlashMessages();
        this.props.addFlashMessage({
          type: 'success',
          text: `Welcome, ${this.state.username}`
        })
      this.props.history.push('/centers')
     })
      .catch((error) => {
        this.setState({ errors : error.response.data, isLoading: false})
      })
    }
  }

	render() {
    const { errors } = this.state
		return ( 
      <section>
        <div className="container" id="container-signUpBody">
          <div className="row" id="signup">
            <form onSubmit={this.onSubmit} >
            <h3>Register</h3>
            <p>Fill in the form to register into Events Manager</p>
              <TextFieldGroup
                error = {errors.username || errors.usernameExists}
                label = "Username"
                onChange = {this.onChange}
                onBlur = { this.userExists }
                value = {this.state.username}
                field = "username"
               />
              <TextFieldGroup
                error = {errors.email || errors.emailExists}
                label = "Email"
                onChange = {this.onChange}
                onBlur = { this.userExists }
                value = {this.state.email}
                field = "email"
               />
                <TextFieldGroup
                error = {errors.password}
                label = "Password"
                onChange = {this.onChange}
                onBlur = { this.userExists }
                value = {this.state.password}
                field = "password"
                type="password"
               />
                <TextFieldGroup
                error = {errors.reEnterPassword}
                label = "Re-Enter Password"
                onChange = {this.onChange}                
                value = {this.state.reEnterPassword}
                field = "reEnterPassword"
                type="password"
               />
              <button type="submit" disabled={this.state.isLoading || this.state.invalid} className="btn btn-register">Register</button>
            </form>
          </div>
        </div>	
			</section>
    )
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: propTypes.func.isRequired,
  addFlashMessage: propTypes.func.isRequired,
  checkUserExists: propTypes.func.isRequired,
  clearFlashMessages: propTypes.func.isRequired
}

export default SignUpForm;