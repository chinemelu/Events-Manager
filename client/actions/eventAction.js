import axios from 'axios';
import { CREATE_EVENT, GET_EVENT, DELETE_EVENT } from '../actionTypes';

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


const getEvent = (event) => {
  console.log(event)
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

export const getEventRequest = eventId =>
  dispatch =>
    axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/events/${eventId}`,
      isLoading: true
    })
      .then(event =>
        dispatch(getEvent(event)));


export const deleteEventRequest = eventId =>
  dispatch =>
    axios({
      method: 'delete',
      url: `http://localhost:3000/api/v1/events/${eventId}`,
      isLoading: true
    })
      .then(() =>
        dispatch(deleteEvent(eventId)));
