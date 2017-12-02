import initialState from './initialState';
import * as actionTypes from '../actionTypes/index';

// Handles user related actions
const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actionTypes.USER_CREATED:
      return [...state, action.user];
    default:
      return state;
  }
};

export default userReducer;
