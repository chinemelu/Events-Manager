import { combineReducers } from 'redux';
import auth from './auth';
import flashMessages from './flashMessages';
import center from './centerReducer';
import facility from './facilityReducer';
import setup from './eventSetUpReducer';
import eventTypes from './eventTypeReducer';
import event from './eventReducer';

const rootReducers = combineReducers({
  flashMessages,
  auth,
  center,
  facility,
  setup,
  eventTypes,
  event
});

export default rootReducers;
