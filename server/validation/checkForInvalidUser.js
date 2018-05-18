import db from '../models';
import createEventValidator from '../validation/createevent';

const checkForInvalidUser = (req, res, next) => {
  const { errors, isValid } = createEventValidator(req.body);
  const { userId } = req.decoded;
  if (isValid) {
    db.User.findById(userId)
      . then((user) => {
        if (!(user)) {
          res.status(404).json({
            message: 'The User does not exist'
          });
        } else {
          next();
        }
      });
  } else {
    res.status(400).json({ errors });
  }
};


export default checkForInvalidUser;
