import axios from 'axios';
import { LOAD_EVENT_TYPES } from '../actionTypes';

export const loadEventTypes = (eventTypes) => {
  return {
    type: LOAD_EVENT_TYPES,
    eventTypes: eventTypes.data.data,
    isLoading: false
  };
};

export const getAllEventTypesRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/eventTypes',
      isLoading: true
    })
      .then(eventTypes =>
        dispatch(loadEventTypes(eventTypes)))
      .catch(error => error);
