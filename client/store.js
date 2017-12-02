import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers/index';

const store = createStore(
  allReducer,
  applyMiddleware(thunk)
);

export default store;
