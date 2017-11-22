import db from '../models/index';

/**
 * @class centercontroller
 */
class centercontroller {
/**
   * @description add centers
   * @param {*} req http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static addCenter(req, res) {
    const { isAdmin } = req.decoded;
    const { userId } = req.decoded;
    if (isAdmin !== true || isAdmin === false) {
      res.status(403).json({
        message: 'You are not authorised to perform your action'
      });
    } else {
      const {
        name,
        location,
        description,
        suitablefor,
        facilities
      } = req.body;
      db.Center.create({
        name,
        location,
        description,
        suitablefor,
        facilities,
        userId
      })
        .then((center) => {
          res.status(201).json({
            message: 'You have successfully added a center',
            data: center
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: error.message || 'Internal Server Error'
          });
        });
    }
  }
  /**
   * @description edit center details
   * @param {*} req http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static modifyCenterDetails(req, res) {
    const {
      name,
      location,
      description,
      suitablefor,
      facilities
    } = req.body;
    const { id } = req.params;
    const { isAdmin } = req.decoded;
    db.Center.findById(id)
      .then((center) => {
        if (center) {
          if (isAdmin !== true || isAdmin === false) {
            res.status(403).json({
              message: 'You are not authorised to modify this center'
            });
          } else {
            db.Center.update({
              name,
              location,
              description,
              suitablefor,
              facilities
            })
              .then(() => {
                res.status(200).json({
                  message: 'You have modified the center successfully'
                });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err.message
                });
              });
          }
        } else {
          res.status(204).end();
        }
      });
  }
}

export default centercontroller;
