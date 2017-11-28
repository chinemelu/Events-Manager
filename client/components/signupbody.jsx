import React from 'react';

class Navbar extends React.Component {
    render() {
        return(
				<section id='signup-form'>
								<div className="container">
								<div className="row">
										<form action="../events-centre-details/index.html" method="post">
										<div className="form-group">
												<h3>Register</h3>
												<p>Fill in the form to register into Events Manager</p>
												<label htmlFor="exampleInputUsername">Username</label>
												<input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username" />
										</div>
										<div className="form-group">
												<label htmlFor="exampleInputemail">Email</label>
												<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
										</div>
										<div className="form-group">
												<label htmlFor="exampleInputPassword1">Password</label>
												<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
										</div>
										<div className="form-group">
												<label htmlFor="exampleInputPassword1">Re-Enter Password</label>
												<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-Enter Password"/>
										</div>
										<button type="submit" className="btn">Register</button>
										</form>
								</div>
								</div>
						</section>
				)
		}
}
export default Navbar 