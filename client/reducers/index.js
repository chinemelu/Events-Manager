import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Combines all reducers to a single reducer function
const allReducer = combineReducers({
  userReducer
});

export default allReducer;
