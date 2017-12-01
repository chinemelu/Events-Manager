import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app.jsx';
import Landingpagebody from './components/landingpagebody.jsx';
import Signupbody from './components/signupbody.jsx';
import Signinbody from './components/signinbody.jsx';

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