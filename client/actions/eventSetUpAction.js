import axios from 'axios';
import { LOAD_EVENTS_SETUP } from '../actionTypes';

export const loadEventSetUps = (setups) => {
  return {
    type: LOAD_EVENTS_SETUP,
    setups: setups.data.data,
    isLoading: false
  };
};

export const getAllEventSetUpsRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/setups',
      isLoading: true
    })
      .then(setups =>
        dispatch(loadEventSetUps(setups)))
      .catch(error => error);

