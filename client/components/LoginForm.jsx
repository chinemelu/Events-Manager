import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import loginValidator from '../../server/validation/loginValidation.js';
import TextFieldGroup from './TextFieldGroup.jsx';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: '',
      errors: {},
      isLoading: false
    }
    // this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
       [event.target.name]: event.target.value
    })
  }

  isValid() {
    const { errors, isValid } = loginValidator(this.state)
    if ({ errors }) {
       this.setState({ errors })
    }
    return isValid
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.clearFlashMessages()
      this.props.loginRequest(this.state).then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: `${this.state.username}, you have logged in successfully`
        })
        this.props.history.push('/centers')
      })
      .catch((errors) => {
        if (errors.response === undefined) {
          return <div className='loader'></div>
        } else {
        return this.props.addFlashMessage({
          type: 'error',
          text: errors.response.data.errors.form
        })
        this.setState({ errors: errors.response.data.errors, isLoading: false })
      }
      })
    }
  }
  
	render() {
    const { errors } = this.state
		return ( 
      <section id="signin-wrapper">
        <div className="container" id="container-signInBody">
          <div className="row" id="signin">
            <form onSubmit={this.onSubmit}>
                <h3>Login</h3>
                <p>Fill in the form to log into Events Manager</p>
              <TextFieldGroup
              error = {errors.username}
              label = "Username"
              onBlur = {this.onBlur}
              onChange = {this.onChange}
              field = "username"
              value = {this.state.username}
              />
              <TextFieldGroup
              error = {errors.password}
              label = "Password"
              onBlur = {this.onBlur}
              type = "password"
              onChange = {this.onChange}
              field = "password"
              value = {this.state.password}
              />
              <button type="submit" className="btn gold-btn" disabled={this.state.isLoading}>Login</button>
              <Link id='forgotten-password' to='#'><small>forgotten password?</small></Link>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

LoginForm.propTypes = {
  loginRequest: propTypes.func.isRequired,
  addFlashMessage: propTypes.func.isRequired,
  clearFlashMessages: propTypes.func.isRequired
}


export default LoginForm;