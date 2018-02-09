import { SIGN_UP_SUCCESS } from '../actionTypes/signUp';

const initialState = {
  isSuccess: false
};

export const userSignUp = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return action.payload.isSuccess;

    default:
      return state;
  }
};

export default userSignUp;
