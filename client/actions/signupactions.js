import axios from 'axios';

const userSignupRequest = (userData) => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
      data: userData
    })
    .then(function(response) {
      dispatch({ type: 'USER_CREATED' })
    })
    .catch(function(error) {
      dispatch({ type: 'USER_CREATED_ERROR' })
    });
  }
}

export default userSignupRequest;



