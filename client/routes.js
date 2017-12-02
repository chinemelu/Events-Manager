import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landingpagebody from './components/LandingPageBody.jsx';
import Signupbody from './components/SignUpBody.jsx';
import Signinbody from './components/SignInBody.jsx';

const Routes = () => (
  <BrowserRouter>
  <Switch>
      <Route exact path='/' component={Landingpagebody} />
      <Route path='/users' component={Signupbody} />
      <Route path='/login' component={Signinbody} />
  </Switch>
  </BrowserRouter>
)
export default Routes