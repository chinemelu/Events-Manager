import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from './utils/setAuthorizationToken';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { setCurrentUser } from './actions/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
      <App/>
</BrowserRouter>
</Provider>), document.getElementById('app')
)


