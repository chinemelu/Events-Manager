import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getEventRequest, deleteEventRequest } from '../actions/eventAction';
import EventDetails from './EventDetails'

class EventDetailsPage extends React.Component{
  componentDidMount(){
    this.props.getEventRequest(this.props.match.params.id)
  }
  render(){
    const { getEventRequest, history, event, eventCenter, isLoading, isAdminAuthenticated, isMyEvent, deleteEventRequest, isEditing } = this.props;
    return(
      <EventDetails
      getEventRequest= { getEventRequest }
      history = {history}
      event = {event}
      eventCenter = { eventCenter }
      isLoading = { isLoading }
      isAdminAuthenticated = { isAdminAuthenticated }
      deleteEventRequest = {deleteEventRequest}
      isEditing = { isEditing }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.event.currentEvent,
    eventCenter: state.event.currentEvent.Center,
    isLoading: state.event.isLoading,
    isAdminAuthenticated: state.auth.isAdminAuthenticated,
  }
}

EventDetailsPage.propTypes = {
  deleteEventRequest: propTypes.func.isRequired,
  getEventRequest: propTypes.func.isRequired,
  events: propTypes.object,
  eventCenter: propTypes.object,
  isLoading: propTypes.bool.isRequired,
  isAdminAuthenticated: propTypes.bool.isRequired
}

export default connect(mapStateToProps, { getEventRequest, deleteEventRequest })(EventDetailsPage)

