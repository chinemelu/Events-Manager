import '../actionTypes/index';

const createUser = (user) => {
  return {
    type: USER_CREATED,
    payload: user
  };
};

export default createUser;
