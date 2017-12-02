import { USER_CREATED } from '../actionTypes/index';

const userSignUpSuccess = (bool) => {
  return {
    type: 'USER_CREATED',
    isSuccess: bool
  };
};


export default userSignUpSuccess;
