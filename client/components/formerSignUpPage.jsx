import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/SignUpBody.scss';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import SignUpForm from './SignUpForm.jsx';

/**
 *  Input sign up body form component
 */

class SignUpPage extends React.Component {
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
		e.preventDefault();
		this.props.userSignupSuccess(this.state)
		const { isSuccess } = this.props
		console.log(this.props.isSuccess)
		if (this.props.isSuccess === true) {
			this.props.history.push('/login')
		}
	}
   
/**
 * render
 * @return {ReactElement} markup
 */
  render() {
    return(
			<div className='signUpBody'>
				<PreLoginNavbar/>
				<SignUpForm/>
			</div>
		)
  }
}

/**
 * propTypesSuccess
 * @property {string} userSign isrequired
 */

export default SignUpPage