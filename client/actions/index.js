import actionTypes from './actionTypes';

const createUser = (user) => {
    console.log(`You have created user, ${user.username}`);
    return {
        type: actionTypes.USER_CREATED,
        payload: user
    }
}

export default createUser