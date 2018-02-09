import React from 'react';
import '../scss/SignInBody.scss';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import LoginForm from './LoginForm.jsx';

/**
 *  Input sign in body form component
 */

const LoginPage = () => (
	<div className='signInBody'>
		<PreLoginNavbar/>
		<LoginForm/>
	</div>
)

export default LoginPage
