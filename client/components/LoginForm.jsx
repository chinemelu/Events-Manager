import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
	render() {
		return ( 
      <div className="container">
        <div className="row signin">
          <form action="../events-centre-details/index.html" method="post">
            <div className="form-group">
              <h3>Login</h3>
              <p>Fill in the form to log into Events Manager</p>
              <label htmlFor="exampleInputUsername">Username</label>
              <input type="text" className="form-control" name="username" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn">Login</button>
            <Link id='forgotten-password' to='#'><small>forgotten password?</small></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;