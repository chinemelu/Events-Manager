import axios from 'axios';
import { LOAD_FACILITIES } from '../actionTypes';

export const loadFacilities = (facilities) => {
  return {
    type: LOAD_FACILITIES,
    facilities: facilities.data.data,
    isLoading: false
  };
};

export const getAllFacilitiesRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/facilities',
      isLoading: true
    })
      .then(facilities =>
        dispatch(loadFacilities(facilities)))
      .catch(error => error);
