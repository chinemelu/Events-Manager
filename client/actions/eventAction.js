import axios from 'axios';
import { CREATE_EVENT, GET_EVENT, LOAD_ALL_EVENTS, DELETE_EVENT, LOAD_ALL_USER_GUEST_EVENTS, EDIT_EVENT, GET_MY_EVENTS } from '../actionTypes';

export const postEventRequest = (eventData, callback) =>
  dispatch =>
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/events',
      data: eventData,
      isLoading: true
    })
      .then(event =>
        dispatch({
          type: CREATE_EVENT,
          event: event.data.data,
          isLoading: false
        }))
      .then(() => callback());

export const editEventRequest = (eventData, eventId, callback) =>
  dispatch =>
    axios.put(`http://localhost:3000/api/v1/events/${eventId}`, {
      title: eventData.title,
      centerId: eventData.centerId,
      eventTypeId: eventData.eventTypeId,
      eventSetUpId: eventData.eventSetUpId,
      description: eventData.description,
      numberofattendees: eventData.numberofattendees,
      additionalcomments: eventData.additionalcomments,
      startdate: eventData.startdate,
      enddate: eventData.enddate,
      starttime: eventData.starttime,
      endtime: eventData.endtime,
      isPrivate: eventData.isPrivate,
    })
      .then(event =>
        dispatch({
          type: EDIT_EVENT,
          event: event.data.data,
          isLoading: false
        }))
      .then(() =>
        callback())
      .catch(error => error);

const getEvent = (event) => {
  return {
    type: GET_EVENT,
    event: event.data.data,
    isLoading: false
  };
};


const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    eventId,
    isLoading: false
  };
};

const getAllEvents = (events) => {
  return {
    type: LOAD_ALL_EVENTS,
    isLoading: false,
    events: events.data.data
  };
};

const getAllUserGuestEvents = (events) => {
  return {
    type: LOAD_ALL_USER_GUEST_EVENTS,
    isLoading: false,
    events: events.data.data
  };
};


export const getEventRequest = eventId =>
  dispatch =>
    axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/events/${eventId}`,
      isLoading: true
    })
      .then(event =>
        dispatch(getEvent(event)));


export const deleteEventRequest = (eventId, callback) =>
  dispatch =>
    axios({
      method: 'delete',
      url: `http://localhost:3000/api/v1/events/${eventId}`,
      isLoading: true
    })
      .then(() =>
        dispatch(deleteEvent(eventId)))
      .then(() => callback());

export const getAllEventsRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/events',
      isLoading: true
    })
      .then(events => {
        console.log("events", events)
        dispatch(getAllEvents(events))});

export const getUserAndGuestUpcomingEventsRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/userguestevents',
      isLoading: true
    })
      .then(userguestevents =>
        dispatch(getAllUserGuestEvents(userguestevents)));


export const getMyEventsRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/myevents'
    })
      .then(myevents =>
        dispatch({
          type: GET_MY_EVENTS,
          events: myevents.data.data,
          isLoading: false
        }));
