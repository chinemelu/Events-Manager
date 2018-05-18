import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER } from '../actionTypes';

const initialState = {
  isUserAuthenticated: false,
  isAdminAuthenticated: false,
  isMyAccount: false,
  user: {}
};
const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isUserAuthenticated: !isEmpty(action.user) && action.user.role === 'user',
        isAdminAuthenticated: !isEmpty(action.user) && (action.user.role === 'admin' || action.user.role === 'superadmin'),
        user: action.user
      };
    default: return state;
  }
};

export default auth;
