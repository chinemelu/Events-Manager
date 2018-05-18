import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './auth';

export const userSignUpRequest = (userData) => { 
  return dispatch => {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
      data: userData
    })
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token))); 
    })
  } 
}

export const checkUserExists = (parameter) => {
  return dispatch => {
    return axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/users/${parameter}`,
    })
  }
}
