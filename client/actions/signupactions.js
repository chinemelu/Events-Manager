import axios from 'axios';

const userSignupRequest = (userData) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
    });
  }
}

export default userSignupRequest;



