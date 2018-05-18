import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { loginRequest }  from '../actions/auth.js';
import { addFlashMessage, clearFlashMessages } from '../actions/flashMessage';
import '../scss/SignInBody.scss';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import LoginForm from './LoginForm.jsx';

/**
 *  Input sign in body form component
 */

class LoginPage extends React.Component {
	render() {
		const { loginRequest, addFlashMessage, clearFlashMessages, history} = this.props
		return (
			<div className='signInBody'>
				<LoginForm loginRequest = { loginRequest }
				 addFlashMessage = { addFlashMessage }
				 clearFlashMessages = { clearFlashMessages}
				 history = { history }
				/>
			</div>
		)
  }
}

LoginPage.propTypes = {
	loginRequest: propTypes.func.isRequired,
	addFlashMessage: propTypes.func.isRequired,
	clearFlashMessages: propTypes.func.isRequired
}


export default connect(null, { loginRequest, addFlashMessage, clearFlashMessages })(LoginPage)
