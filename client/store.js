import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { provider } from 'react-redux';
import allReducers from './reducers';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);
 
ReactDOM.render(<h2>Hey now</h2>, document.getElementById('app'))

export default store