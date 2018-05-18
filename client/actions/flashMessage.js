import { ADD_FLASH_MESSAGE, CLEAR_FLASH_MESSAGES, DELETE_FLASH_MESSAGE } from '../actionTypes';

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
};

export const clearFlashMessages = () => {
  return {
    type: CLEAR_FLASH_MESSAGES,
  };
};

export const deleteFlashMessage = (id) => {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
};

