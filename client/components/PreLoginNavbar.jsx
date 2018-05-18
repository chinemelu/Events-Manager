import React from 'react';
import { Link } from 'react-router-dom';
import FlashMessageList from './flashMessageList';
import '../scss/Navbar.scss'

/**
 *  Input navigation bar component of the landing/sign in/sign up pages
 */

class PreLoginNavbar extends React.Component {
  render() {
    return(
      <div id='PreLoginBody'>
        <header>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id='navbar-override'>
            <Link to="/" className="no-highlight navbar-brand">Events-Manager</Link>
            <div className="collapse navbar-collapse" id="navbarText">
              <div id='float'>
                <span className="navbar-text">
                  <Link id='highlight' to='/login'>SIGN IN</Link>
                </span>
                <span className="navbar-text">
                  <Link className="no-highlight" to='#'>|</Link>
                </span>
                <span className="navbar-text">
                  <Link to='/users'>SIGN UP</Link>
                </span>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default PreLoginNavbar