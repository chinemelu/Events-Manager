import { LOAD_EVENTS_SETUP } from '../actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_EVENTS_SETUP:
      return action.setups;
    default: return state;
  }
};
