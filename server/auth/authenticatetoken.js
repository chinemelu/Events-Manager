import jwt from 'jsonwebtoken';

const authenticatetoken = (req, res, next) => {
  const { token } = req.headers;
  // gets token from header

  if (token) {
    // if there's a token, JWT verifies if it's valid
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({
          errorName: err.name,
          errorMessage: err.message,
        });
      } else {
        req.decoded = decoded;
        next();
        // if the token is valid, the process proceeds to the route
      }
    });
  } else {
  // if there is no token, an instant error message is sent
    return res.status(403).send({
      success: 'false',
      message: 'No token provided'
    });
  }
};

export default authenticatetoken;

