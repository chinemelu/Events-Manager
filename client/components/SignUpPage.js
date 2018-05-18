import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import { clearFlashMessages } from '../actions/flashMessage';
import '../scss/SignUpBody.scss';
import LoginPage from './LoginPage.jsx';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import SignUpForm from './SignUpForm.js';
import  { userSignUpRequest, checkUserExists } from '../actions/signUp.js';
import  { addFlashMessage }  from '../actions/flashMessage.js';

/**
 *  Input sign up body form component
 */

class SignUpPage extends React.Component {
  render() {
    const { userSignUpRequest, 
      addFlashMessage, 
      history, 
      checkUserExists, 
      clearFlashMessages 
    } = this.props

    return (
      <div className='signUpBody'>
        <SignUpForm userSignUpRequest={userSignUpRequest} 
         history={history}
         addFlashMessage={addFlashMessage}
         checkUserExists = { checkUserExists }
         clearFlashMessages = { clearFlashMessages }
         />
      </div>
    )
  }
}

SignUpPage.propTypes = {
  userSignUpRequest: propTypes.func.isRequired,
  addFlashMessage: propTypes.func.isRequired,
  checkUserExists: propTypes.func.isRequired,
  clearFlashMessages: propTypes.func.isRequired
}

export default connect(null, {userSignUpRequest, addFlashMessage, checkUserExists, clearFlashMessages })(SignUpPage);