import axios from 'axios';

const userSignUpRequest = (userData) => { 
  return dispatch => {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
      data: userData
    })
  };
}
export default userSignUpRequest;
