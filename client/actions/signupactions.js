import axios from 'axios';
import { USER_CREATED, USER_CREATED_ERROR } from '../actionTypes/index';


const userSignupRequest = (userData) => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
      data: userData
    })
      .then((response) => {
        dispatch({ type: USER_CREATED });
      })
      .catch((error) => {
        dispatch({ type: USER_CREATED_ERROR });
      });
  };
  };

export default userSignupRequest;
