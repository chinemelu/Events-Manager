import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app.jsx';
import Routes from './routes.js';
import UserList from './containers/user-list.jsx'
import store from './store.js';

ReactDOM.render((<Provider store={store}>
    <Routes />
 </Provider>
), document.getElementById('app'))



