import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AfterLoginNavbar from './AfterLoginNavbar.jsx';
import EventsCenterDetails from './EventsCenterDetails.js';
import { editCenterRequest, getCenterRequest, deleteCenterRequest } from '../actions/centerAction.js';
import '../scss/CenterDetails.scss';

class EventsCenterDetailsPage extends React.Component{
 
  componentDidMount() {
      this.props.getCenterRequest(this.props.match.params.id)
      .catch(error => error)
  }

  render() {
    const { history, match, center, deleteCenterRequest, editCenterRequest, isLoading, isAdminAuthenticated } = this.props
   
    if (!Array.isArray(this.props.center.Facilities) || !Array.isArray(this.props.center.EventSetUps)) {
      return <div className="loader"></div>
    } else {
      return (
        <div className='centerdetails'>
          <EventsCenterDetails 
          history={history} 
          match={match}
          center={center}
          deleteCenterRequest = { deleteCenterRequest }
          isLoading = {isLoading}
          isAdminAuthenticated={isAdminAuthenticated}
          />
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    center: state.center.currentCenter,
    isLoading: state.center.isLoading,
    isAdminAuthenticated: state.auth.isAdminAuthenticated
  }
}

EventsCenterDetailsPage.propTypes = {
  getCenterRequest: propTypes.func.isRequired,
  deleteCenterRequest: propTypes.func.isRequired,
  editCenterRequest: propTypes.func.isRequired,  
  center: propTypes.object.isRequired,
  isAdminAuthenticated: propTypes.bool.isRequired
}

export default connect(mapStateToProps, { editCenterRequest, getCenterRequest, deleteCenterRequest })(EventsCenterDetailsPage);
