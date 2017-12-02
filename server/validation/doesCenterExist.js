import db from '../models';

const doesCenterExist = (req, res, next) => {
  const { centerId } = req.body;
  db.Center.findById(centerId)
    .then((result) => {
      if (result) {
        next();
      } else {
        res.status(404).json({
          message: 'Center does not exist'
        });
      }
    });
};

export default doesCenterExist;
