import React from 'react';

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
                  <a className='no-highlight' href='../user-signin/index.html'>SIGN IN</a>
                </span>
                <span className="navbar-text">
                <a className="no-highlight" href='#'>|</a>
                </span>
                <span className="navbar-text">
                  <a id="highlight" href='../user-signup/index.html'>SIGN UP</a>
                </span>
              </div>
            </div>
            </nav>
      </header>
       )
    }
}
