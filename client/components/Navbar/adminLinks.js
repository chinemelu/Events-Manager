import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = (props) => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="override-navbar">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="adminLinks-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/centers">All Centres</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/events" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Events
        </Link>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to='/add-events'>Add An Event</Link>
        <Link className="dropdown-item" to='/events'>My events</Link>                    
      </div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/add-center">Add a centre</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="../all-events/index.html">Upcoming Events</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#" onClick = { props.onClick }>Sign Out</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Find a centre"/>
      <button className="btn btn-success my-2 my-sm-0" type="submit" id="search">Search</button>
    </form>
  </div>
</nav>	
)

export default AdminLinks;
