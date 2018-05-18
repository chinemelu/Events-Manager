import { ADD_CENTER, EDIT_CENTER, GET_CENTER, DELETE_CENTER, GET_ALL_CENTERS } from '../actionTypes';

const initialState = {
  currentCenter: {},
  allCenters: [],
  isLoading: true
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CENTER:
      return {
        ...state,
        currentCenter: action.center,
        isLoading: action.isLoading
      };
    case EDIT_CENTER:
      return {
        ...state,
        currentCenter: action.center,
        isLoading: action.isLoading
      };
    case DELETE_CENTER:
      return {
        allCenters: state.allCenters.filter(center => center.id !== action.centerId),
        isLoading: action.isLoading,
        currentCenter: {}
      };
    case GET_CENTER:
      return {
        ...state,
        currentCenter: action.center,
        isLoading: action.isLoading,
      };
    case GET_ALL_CENTERS:
      return {
        ...state,
        currentCenter: {},
        allCenters: action.centers,
        isLoading: action.isLoading
      }
      
    default: return state; 
  }
};
