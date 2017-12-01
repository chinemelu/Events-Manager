const createUser = (user) => {
    console.log(`You have created user, ${user.username}`);
    return {
        type: 'USER_CREATED',
        payload: user
    }
}

export default createUser