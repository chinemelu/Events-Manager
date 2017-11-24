import db from '../models';

const checkForInvalidUser = (req, res, next) => {
  const { userId } = req.decoded;
  db.User.findById(userId)
    . then((user) => {
      if (!(user)) {
        res.status(400).json({
          message: 'The User does not exist. Invalid token'
        });
      } else {
        next();
      }
    });
};


export default checkForInvalidUser;
