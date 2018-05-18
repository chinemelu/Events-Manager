import jwt from 'jsonwebtoken';
import { CREATE_EVENT, GET_EVENT, DELETE_EVENT } from '../actionTypes';

// if (isempty(token)) {
//    return {

//    }
// }
const initialState = {
  currentEvent: {},
  allEvents: [],
  isPrivate: false,
  eventHasPassed: false,
  isMyEvent: false,
  isLoading: true
};

export default (state = initialState, action = {}) => {
  const isMyEvent = () => {
    const token = JSON.stringify(localStorage.getItem('jwtToken'))
    const decodedToken = jwt.decode(JSON.parse(token));
    if (decodedToken === null) {
      return false;
    }
    return action.event.userId === decodedToken.userId;
  };

  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        currentEvent: action.event,
      };
    case GET_EVENT:
      return {
        ...state,
        currentEvent: action.event,
        isMyEvent: isMyEvent(),
        isLoading: action.isLoading
      };
    case DELETE_EVENT:
      return {
        ...state,
        allCenters: state.allEvents.filter(event => event.id !== action.eventId),
        isLoading: action.isLoading,
      };
    default: return state;
  }
};
