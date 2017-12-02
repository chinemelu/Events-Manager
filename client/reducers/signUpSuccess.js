// Handles user_creation related actions
export const userSignUpSuccess = (state = false, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return action.isSuccess;

    default:
      return state;
  }
};

export default userSignUpSuccess;
