import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return(
         <header>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id='navbar-override'>
            <a className="no-highlight navbar-brand" href="#">
              Events-Manager
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
              <div id='float'>
                <span className="navbar-text">
                  <Link className='no-highlight' to='/login'>SIGN IN</Link>
                </span>
                <span className="navbar-text">
                <a className="no-highlight" href='#'>|</a>
                </span>
                <span className="navbar-text">
                   <Link id='highlight' to='/users'>SIGN UP</Link>
                </span>
              </div>
            </div>
            </nav>
      </header>
       )
    }
}
