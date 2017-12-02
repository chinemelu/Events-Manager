import axios from 'axios';
import userSignupSuccess from './index';

const userSignupRequest = (userData) => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
      data: userData
    })
      .then(() => {
        dispatch(userSignupRequest(bool))
        props.history.push('/centers')
      })
      .catch(() => {
        console.log(userData);
      });
    };
  };

export default userSignupRequest;
