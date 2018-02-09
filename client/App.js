import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';


const App = () => (
  <div>
    <Route exact path='/' component={ LandingPage }/>
    <Route path='/login' component={ LoginPage }/>
    <Route path='/users' component={ SignUpPage }/>
  </div>
)

export default App


