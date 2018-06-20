import jwt from 'jsonwebtoken';

const isMyEvent = (userId) => {
  const token = JSON.stringify(localStorage.getItem('jwtToken'));
  const decodedToken = jwt.decode(JSON.parse(token));
  if (decodedToken === null) {
    return false;
  }
  return userId === decodedToken.userId;
};

export default isMyEvent;

