import { CREATE_EVENT, GET_EVENT, DELETE_EVENT, LOAD_ALL_EVENTS, LOAD_ALL_USER_GUEST_EVENTS, EDIT_EVENT, GET_MY_EVENTS } from '../actionTypes';

const initialState = {
  currentEvent: {},
  allEvents: [],
  isLoading: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        currentEvent: action.event,
        isLoading: action.isLoading,
      };
    case GET_EVENT:
      return {
        ...state,
        currentEvent: action.event,
        isLoading: action.isLoading
      };
    case EDIT_EVENT:
      return {
        ...state,
        currentEvent: action.event,
        isLoading: action.isLoading
      };
    case LOAD_ALL_EVENTS:
      return {
        ...state,
        currentEvent: [],
        allEvents: action.events,
        isLoading: action.isLoading,
      };
    case GET_MY_EVENTS:
      return {
        ...state,
        allEvents: action.events,
      };
    case LOAD_ALL_USER_GUEST_EVENTS:
      return {
        ...state,
        currentEvent: [],
        allEvents: action.events,
        isLoading: action.isLoading,
      };
    case DELETE_EVENT:
      return {
        ...state,
        allEvents: state.allEvents.filter(event => event.id !== action.eventId),
        isLoading: action.isLoading,
      };
    default: return state;
  }
};
