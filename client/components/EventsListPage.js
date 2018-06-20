import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import { getAllEventsRequest, getUserAndGuestUpcomingEventsRequest, getMyEventsRequest } from '../actions/eventAction';
import EventsList from './EventsList';
import '../scss/EventsList.scss';

class EventsListPage extends React.Component {

  componentDidMount() {
    if (!this.props.isMyEvent && this.props.isAdminAuthenticated) {
      this.props.getAllEventsRequest();
    } else if (!this.props.isMyEvent && !this.props.isAdminAuthenticated) {
      this.props.getUserAndGuestUpcomingEventsRequest();
    }
     else if (this.props.isMyEvent) {
       this.props.getMyEventsRequest();
     }
  }
  
  render() {
    const { isAdminAuthenticated, isMyEvent } = this.props
    const events =  this.props.events.map(event => 
      <EventsList
      key={event.id}
      event ={event}
      isAdminAuthenticated={ isAdminAuthenticated }
      isMyEvent={isMyEvent}
      />
    )
    
 
    if (!Array.isArray(this.props.events) || this.props.isLoading) {
      return <div className='loader'></div>
    }

    return (
      <div id="body">
        <div className="page-heading">
          {!this.props.isMyEvent ? <h2>Upcoming Events</h2> : <h2>My Events</h2>}
        </div>
      {!this.props.events.length && !this.props.isLoading && <div className='no-centers'>No events available</div>}
        <div>
          {events}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.event.allEvents,
    isAdminAuthenticated: state.auth.isAdminAuthenticated,
    isLoading: state.event.isLoading,
  }
}

EventsListPage.propTypes = {
  getAllEventsRequest: propTypes.func.isRequired,
  isAdminAuthenticated: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired,
  getUserAndGuestUpcomingEventsRequest: propTypes.func,
}

export default connect(mapStateToProps, { getAllEventsRequest, getUserAndGuestUpcomingEventsRequest, getMyEventsRequest })(EventsListPage)