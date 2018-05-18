import shortid from 'shortid';
import findIndex from 'lodash/findIndex';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, CLEAR_FLASH_MESSAGES } from '../actionTypes';

export default (state = [], action = {}) => {
  const index = findIndex(state, { id: action.id });
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      if (index >= 0) {
        return [
          ...state.filter(message => message.id !== action.id)
        ];
      }
      return state;
    case CLEAR_FLASH_MESSAGES:
      return [];
    default: return state;
  }
};
