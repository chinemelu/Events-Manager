import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from '../actionTypes';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export const loginRequest = userData =>
  dispatch =>
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users/login',
      data: userData
    })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
      });
