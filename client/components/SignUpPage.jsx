import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import '../scss/SignUpBody.scss';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import SignUpForm from './SignUpForm.jsx';
import userSignUpRequest from '../actions/signUp.js';

/**
 *  Input sign up body form component
 */

class SignUpPage extends React.Component {
  render() {
    const {userSignUpRequest} = this.props;
    return (
      <div className='signUpBody'>
        <PreLoginNavbar/>
        <SignUpForm userSignUpRequest={userSignUpRequest}/>
      </div>
    )
  }
}

SignUpPage.propTypes = {
  userSignUpRequest: propTypes.func.isRequired
}

export default connect ((state) => { return {}}, {userSignUpRequest})(SignUpPage);