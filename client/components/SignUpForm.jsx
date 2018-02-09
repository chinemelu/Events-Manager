import React from 'react';
import propTypes from 'prop-types';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      reEnterPassword:'',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.userSignUpRequest(this.state);
  }

	render() {
		return ( 
      <section>
        <div className="container">
          <div className="row signup">
            <form onSubmit={this.onSubmit} >
              <div className="form-group">
                <h3>Register</h3>
                <p>Fill in the form to register into Events Manager</p>
                <label htmlFor="exampleInputUsername">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  className="form-control" 
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputemail">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-control"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  className="form-control" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Re-Enter Password</label>
                <input 
                  type="password" 
                  name="reEnterPassword" 
                  className="form-control" 
                  placeholder="Re-Enter Password"
                  value={this.state.reEnterPassword}
                  onChange={this.onChange}/>
              </div>
              <button type="submit"  className="btn">Register</button>
            </form>
          </div>
        </div>	
			</section>
    )
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: propTypes.func.isRequired
}

export default SignUpForm;