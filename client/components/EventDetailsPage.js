import React from 'react';
import { connect } from 'react-redux';
import { getEventRequest } from '../actions/eventAction';
import EventDetails from './EventDetails'

class EventDetailsPage extends React.Component{
  componentDidMount(){
    this.props.getEventRequest(this.props.match.params.id)
  }
  render(){
    const { getEventRequest, history, event, eventCenter, isLoading, isAdminAuthenticated, isMyEvent } = this.props;
    return(
      <EventDetails
      getEventRequest= { getEventRequest }
      history = {history}
      event = {event}
      eventCenter = { eventCenter }
      isLoading = { isLoading }
      isAdminAuthenticated = { isAdminAuthenticated }
      isMyEvent = { isMyEvent }
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
    isMyEvent: state.event.isMyEvent
  }
}

export default connect(mapStateToProps, { getEventRequest })(EventDetailsPage)

