import { combineReducers } from 'redux';

import UserSignUpSuccess from './signUpSuccess';

// Combines all reducers to a single reducer function
const rootReducers = combineReducers({
  UserSignUpSuccess
});

export default rootReducers;
