import React from 'react';

class Innernavbar extends React.Component {
    render() {
        return(
          <div>
         <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="override-navbar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item">
                  <a className="nav-link" href="../all-events-centres/index.html">All Centres</a>
                </li>
                 <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   My Events
                  </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   <a className="dropdown-item" href="../create_events/index.html">Add an event</a>
                   <a className="dropdown-item" href="../all-my-events/index.html">My events</a>                    
                 </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Admin
                  </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   <a className="dropdown-item" href="#">Add a centre</a>
                 </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../all-events/index.html">Upcoming Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../landing-page/index.html">Sign Out</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Find a centre"/>
                <button className="btn btn-success my-2 my-sm-0" type="submit" id="search">Search</button>
              </form>
            </div>
          </nav>
          </div>
       )
    }
}

export default Innernavbar