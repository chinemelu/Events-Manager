import { LOAD_EVENT_TYPES } from '../actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_EVENT_TYPES:
      return action.eventTypes;
    default: return state;
  }
};
