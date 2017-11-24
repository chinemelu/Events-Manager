import db from '../models';

const isdatevalid = (req, res, next) => {
  const {
    startdatetime,
    enddatetime,
    centerId
  } = req.body;

  const today = new Date();

  if (new Date(startdatetime) < today || new Date(enddatetime) < today) {
    res.status(400).json({
      message: 'Date has already passed. Pick a different date'
    });
  } else if (new Date(enddatetime) < new Date(startdatetime)) {
    res.status(400).json({
      message: 'Invalid end date. Pick a different date'
    });
  } else {
    db.Event.findOne({
      where: {
        [db.Sequelize.Op.and]: [
          {
            centerId
          }, {
            startdatetime: new Date(startdatetime)
          }
        ]
      }
    })
      .then((event) => {
        if (event) {
          res.status(409).json({
            message: 'That date has been taken. Please choose another date.'
          });
        } else {
          next();
        }
      });
  }
};


export default isdatevalid;
