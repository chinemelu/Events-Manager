import { LOAD_FACILITIES } from '../actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_FACILITIES:
      return action.facilities;
    default: return state;
  }
};
