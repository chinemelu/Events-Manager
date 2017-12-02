import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import userSignupRequest  from '../actions/SignUpActions';
import '../scss/SignUpBody.scss';
import Navbar from './Navbar.jsx';

/**
 *  Input sign up body form component
 */

class SignUpBody extends React.Component {
/**
 * constructor
 * @param {object} props
 */

	constructor(props) {
		super(props);

 /**
 * @type {object}
 * @property {string} signup details
 */
		this.state = {
			username: '',
			email: '',
			password: '',
			reEnterPassword: '',
			isLoading: false,
			isSuccess: false
		}
		/**
		 * change onChange and onSubmit context to component
		 */
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
/**
 * onChange input event
 * @param {SytheticEvent} e
 */
  onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

/**
 * onSubmit event at input form
 * @param {SytheticEvent} e
 */
	onSubmit(e) {
		this.setState ({ isLoading: true })
		e.preventDefault();
		this.props.userSignupRequest(this.state)
	}

/**
 * render
 * @return {ReactElement} markup
 */
  render() {
    return(
			<div className='signUpBody'>
				<Navbar/>
					<section>
						<div className="container">
							<div className="row signup">
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
									<button type="submit"  className="btn">Register</button>
								</form>
							</div>
						</div>	
					</section>
			</div>
		)
  }
}

/**
 * propTypes
 * @property {string} userSignUpRequest isrequired
 */

SignUpBody.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
}


let mapDispatchToProps = {
	userSignupRequest
}
export default connect(null, mapDispatchToProps)(SignUpBody);