import axios from 'axios';
import { ADD_CENTER, GET_CENTER, EDIT_CENTER, DELETE_CENTER, GET_ALL_CENTERS } from '../actionTypes';

export const postCenterRequest = (centerData, callback) =>
  dispatch =>
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/centers',
      data: centerData,
      isLoading: true
    })
      .then(center =>
        dispatch({
          type: ADD_CENTER,
          center: center.data,
          isLoading: false,
        }))
      .then(() =>
        callback())
      .catch(error => error);

export const getCenterRequest = centerId =>
  dispatch =>
    axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/centers/${centerId}`,
      isLoading: true
    })
      .then(center =>
        dispatch({
          type: GET_CENTER,
          center: center.data.data,
          isLoading: false
        }));

export const editCenterRequest = (centerData, centerId, callback) =>
  dispatch =>
    axios.put(`http://localhost:3000/api/v1/centers/${centerId}`, {
      name: centerData.name,
      location: centerData.location,
      description: centerData.description,
      facilityIds: centerData.facilityIds,
      eventSetupIds: centerData.eventSetupIds
    })
      .then(center =>
        dispatch({
          type: EDIT_CENTER,
          center: center.data.data,
          isLoading: false
        }))
      .then(() =>
        callback())
      .catch(error => error);


export const deleteCenterRequest = centerId =>
  dispatch =>
    axios({
      method: 'delete',
      url: `http://localhost:3000/api/v1/centers/${centerId}`,
      isLoading: true
    })
      .then(() => {
        dispatch({
          type: DELETE_CENTER,
          centerId,
          isLoading: false
        });
      });

export const getAllCentersRequest = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/centers',
      isLoading: true
    })
      .then((centers) => {
        dispatch({
          type: GET_ALL_CENTERS,
          centers: centers.data.data,
          isLoading: false
        });
      });

