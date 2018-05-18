import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AddEventPage from './components/AddEventPage.jsx';
import LandingPage from './components/LandingPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.js';
import SeeAllEventsCentersPage from './components/SeeAllEventsCentersPage.jsx';
// import AddEventsCenterForm from './components/AddEventsCenterForm.js';
import AddEventsCenterPage from './components/AddEventsCenterPage.js';
import Authenticate from './utils/Authenticate.js';
import AdminAuthenticate from './utils/AdminAuthenticate.js';
import CenterDetailsPageRedirect from './utils/CenterDetailsPageRedirect.js';
import EventsCenterDetailsPage from './components/EventsCenterDetailsPage.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import PreLoginLayout from './components/PreLoginLayout.jsx';
import AfterLoginLayout from './components/AfterLoginLayout.jsx';
import AppRoute from './components/AppRoute.jsx';
import AddPropsToRoute from './components/AddPropsToRoute.jsx';
import EventDetailsPage from './components/EventDetailsPage.js';

const App = (props) => (
  <div>
    <Switch>
      <AppRoute exact path='/' layout={PreLoginLayout} component={CenterDetailsPageRedirect(LandingPage)}/>
      <AppRoute path='/users' layout={PreLoginLayout} component={CenterDetailsPageRedirect(SignUpPage)}/> 
      <AppRoute path='/login' layout={PreLoginLayout} component={CenterDetailsPageRedirect(LoginPage)}/>
      <AppRoute path='/centers/:id' layout={AfterLoginLayout} component ={EventsCenterDetailsPage} />
      <AppRoute exact path='/centers' layout={AfterLoginLayout} component = {SeeAllEventsCentersPage}/>     
      <AppRoute exact path="/add-events" layout={AfterLoginLayout} component={ Authenticate(AddPropsToRoute(AddEventPage, addFormProps))} exact/>  
      <AppRoute exact path='/events/:id' layout = {AfterLoginLayout} component = {EventDetailsPage}/>
      <AppRoute path='/add-center' layout={AfterLoginLayout} component={ AdminAuthenticate(AddPropsToRoute(AddEventsCenterPage, addFormProps))}/>
      <AppRoute path = '/404' layout={AfterLoginLayout} component = {PageNotFound}/>
      <AppRoute layout = {AfterLoginLayout} path='/:id/edit-center' component = {Authenticate(AddPropsToRoute(AddEventsCenterPage, editFormProps))}/>
      <AppRoute layout = {AfterLoginLayout} path='/:id/edit-event' component = {Authenticate(AddPropsToRoute(AddEventPage, editFormProps))} />

      <AppRoute layout = {AfterLoginLayout} component = {PageNotFound}/>
    </Switch>
  </div>
)

 const editFormProps = {
  isEditing: true,
}

const addFormProps = {
  isEditing: false
}


App.propTypes = {
  isEditing: propTypes.bool
}

export default App



