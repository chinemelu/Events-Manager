import React from 'react';
import jwt from 'jsonwebtoken';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import setAuthorizationToken from './setAuthorizationToken';
import { addFlashMessage } from '../actions/flashMessage';
import logout  from '../actions/logout';

export default function (Component) {
  class Authenticate extends React.Component {

    componentWillMount() {
      if (!this.props.isUserAuthenticated && !this.props.isAdminAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You must be logged in to see this page'
        })
        this.props.history.push('/login')
      }

      if (this.props.isUserAuthenticated || this.props.isAdminAuthenticated) {
        const token = JSON.stringify(localStorage.getItem("jwtToken"))
        const decodedToken = jwt.decode(JSON.parse(token))
        if (token && decodedToken.exp < Date.now()/1000) {
          this.props.logout()
        } 
      }
    }

    componentWillUpdate(nextProps){
      if (!nextProps.isAuthenticated){
        this.props.history.push('/login')
      }
    }

    render() { 
      return (
        <Component { ...this.props }/>
      )
    }
  }
    const mapStateToProps = (state) => {
      return {
        isUserAuthenticated: state.auth.isUserAuthenticated,
        isAdminAuthenticated: state.auth.isAdminAuthenticated
      }
    }
    
    Authenticate.propTypes = {
      isUserAuthenticated: propTypes.bool.isRequired,
      isAdminAuthenticated: propTypes.bool.isRequired,      
      addFlashMessage: propTypes.func.isRequired
    }
  
  return connect(mapStateToProps, { addFlashMessage, logout })(Authenticate)
}


