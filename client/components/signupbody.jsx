import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import userSignupRequest  from '../actions/signupactions';
import '../css/sign-up-form.scss';
import Signupnavbar from './signupnavbar.jsx';

class Signupbody extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			reEnterPassword: ''

		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

  onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	
	onSubmit(e) {
		this.setState({ errors: {} });
		e.preventDefault();
		this.props.userSignupRequest(this.state)
	}

  render() {
        return(
				<section id='signup-form'>
					            <Signupnavbar/>
								<div className="container">
								<div className="row">
										<form onSubmit={this.onSubmit} >
										<div className="form-group">
												<h3>Register</h3>
												<p>Fill in the form to register into Events Manager</p>
												<label htmlFor="exampleInputUsername">Username</label>
												<input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username" />

										</div>
										<div className="form-group">
												<label htmlFor="exampleInputemail">Email</label>
												<input type="email" value={this.state.email} onChange={this.onChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
										</div>
										<div className="form-group">
												<label htmlFor="exampleInputPassword1">Password</label>
												<input type="password" value={this.state.password} onChange={this.onChange} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
										</div>
										<div className="form-group">
												<label htmlFor="exampleInputPassword1">Re-Enter Password</label>
												<input type="password" value={this.state.reEnterPassword} onChange={this.onChange} name="reEnterPassword" className="form-control" id="exampleInputPassword1" placeholder="Re-Enter Password"/>
										</div>
										<button type="submit" className="btn">Register</button>
										</form>
								</div>
								</div>
						</section>
				)
		}
}

Signupbody.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}
export default connect(null, { userSignupRequest})(Signupbody);