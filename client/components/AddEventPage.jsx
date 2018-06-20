import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCentersRequest } from '../actions/centerAction';
import { getAllEventSetUpsRequest } from '../actions/eventSetUpAction';
import { postEventRequest, getEventRequest, editEventRequest }  from '../actions/eventAction';
import { getAllEventTypesRequest } from '../actions/eventTypeAction';
import AddEventForm from './AddEventForm.jsx';
import '../scss/AddEvent.scss';

class AddEventPage extends React.Component{

  componentDidMount() {
    this.props.getAllEventTypesRequest()
    this.props.getAllCentersRequest()
    this.props.getAllEventSetUpsRequest()
    this.props.isEditing && this.props.getEventRequest(this.props.match.params.id)
  }

  render() {
    const { postEventRequest, eventTypes, center, setup, history, match, event, isEditing, isLoading, editEventRequest } = this.props
    if (this.props.isEditing && Object.keys(event).length > 0 && Object.keys(center).length > 0 || 
    !this.props.isEditing && Object.keys(setup).length > 0 && Object.keys(center).length > 0 && Object.keys(eventTypes).length > 0) {
       return (
        <div className='addeventpage'>
          <AddEventForm 
          postEventRequest = {postEventRequest}
          eventTypes = {eventTypes}
          centers={center}
          eventSetups={setup}
          history={history}
          match={match}
          event={event}
          isEditing = { isEditing }
          isLoading = { isLoading }
          editEventRequest = { editEventRequest }
          />
        </div>
      )
    } 
    return <div className='loader'></div>
  }
}

AddEventPage.propTypes = {
  postEventRequest: propTypes.func,
  getAllEventTypesRequest: propTypes.func.isRequired,
  getAllCentersRequest: propTypes.func.isRequired,
  getAllEventSetUpsRequest: propTypes.func.isRequired,
  editEventRequest: propTypes.func
}

const mapStateToProps = (state) => {
  return {
    eventTypes: state.eventTypes,
    center: state.center,
    setup: state.setup,
    event: state.event.currentEvent,
    isLoading: state.event.isLoading
  }
}

export default connect(mapStateToProps, { postEventRequest, getAllEventTypesRequest, 
  getAllCentersRequest, getAllEventSetUpsRequest, getEventRequest, editEventRequest })(AddEventPage);