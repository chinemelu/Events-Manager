import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCentersRequest } from '../actions/centerAction';
import { getAllEventSetUpsRequest } from '../actions/eventSetUpAction';
import { postEventRequest, getEventRequest }  from '../actions/eventAction';
import { getAllEventTypesRequest } from '../actions/eventTypeAction';
import AddEventForm from './AddEventForm.jsx';
import '../scss/AddEvent.scss';

class AddEventPage extends React.Component{

  componentDidMount() {
    console.log(this.props)
    this.props.getAllEventTypesRequest()
    this.props.getAllCentersRequest()
    this.props.getAllEventSetUpsRequest()
    this.props.getEventRequest(this.props.match.params.id)
  }

  render() {
    const { postEventRequest, eventTypes, center, setup, history, match, event, isEditing, isLoading } = this.props
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
        />
      </div>
    )
  }
}

AddEventPage.propTypes = {
  postEventRequest: propTypes.func,
  getAllEventTypesRequest: propTypes.func.isRequired,
  getAllCentersRequest: propTypes.func.isRequired,
  getAllEventSetUpsRequest: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  console.log("state", state.event)
  return {
    eventTypes: state.eventTypes,
    center: state.center,
    setup: state.setup,
    event: state.event.currentEvent,
    isLoading: state.event.isLoading
  }
}

export default connect(mapStateToProps, { postEventRequest, getAllEventTypesRequest, 
  getAllCentersRequest, getAllEventSetUpsRequest, getEventRequest })(AddEventPage);