import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './auth';

const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}));
  }
}

export default logout;
