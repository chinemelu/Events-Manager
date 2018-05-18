import React from 'react';
import propTypes from 'prop-types';
import GuestLinks from './Navbar/guestLinks';
import UserLinks from './Navbar/userLinks';
import AdminLinks from './Navbar/adminLinks'
import { addFlashMessage, clearFlashMessages } from '../actions/flashMessage';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  logout  from '../actions/logout'
import '../scss/InnerNavbar.scss';
import FlashMessageList from './flashMessageList';

class AfterLoginNavbar extends React.Component {
  /**
 *  Input navigation bar component that is not that of the landing page, sign in page, or sign out page
 */
constructor(props){
  super(props);
  this.onClick = this.onClick.bind(this)
  this.returnAppropriateNavbar = this.returnAppropriateNavbar.bind(this)
}
 
  onClick(event) {
    event.preventDefault();
    this.props.logout();
    this.props.clearFlashMessages();
    this.props.addFlashMessage({
        type: 'success',
        text: 'You have successfully logged out'
    })
    this.props.children.props.history.push('/')
  }

  returnAppropriateNavbar() {
    { if (this.props.auth.isUserAuthenticated) {
      return <UserLinks onClick={this.onClick}/>
    } else if (this.props.auth.isAdminAuthenticated) {
      return <AdminLinks onClick = {this.onClick}/>
    } else {
      return <GuestLinks onClick={this.onClick}/> 
    }
   }
  }

  render() {
    const { isUserAuthenticated, isAdminAuthenticated } = this.props.auth;
    const returnAppropriateNavbar = this.returnAppropriateNavbar();
    
    return(
      <div>
         { returnAppropriateNavbar }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

AfterLoginNavbar.propTypes = {
  auth: propTypes.object.isRequired,
  logout: propTypes.func.isRequired,
  addFlashMessage: propTypes.func.isRequired,
  clearFlashMessages: propTypes.func.isRequired
}

export default connect(mapStateToProps, { logout, addFlashMessage, clearFlashMessages })(AfterLoginNavbar)