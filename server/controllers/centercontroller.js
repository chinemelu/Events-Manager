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
    const { userId } = req.decoded;
    const {
      name,
      location,
      description,
      suitablefor,
      facilities,
      availability
    } = req.body;
    db.Center.create({
      name,
      location,
      description,
      suitablefor,
      facilities,
      userId,
      availability
    })
      .then((center) => {
        res.status(201).json({
          message: 'You have successfully added a center',
          name,
          centerId: center.id,
          location
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error.message || 'Internal Server Error'
        });
      });
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
      facilities,
      availability
    } = req.body;
    const { id } = req.params;
    const { isAdmin } = req.decoded;
    db.Center.findById(id)
      .then((result) => {
        if (result) {
          db.Center.update(
            {
              name,
              location,
              description,
              suitablefor,
              facilities,
              availability
            },
            {
              where: { id },
              returning: true,
              plain: true
            }
          )
            .then((update) => {
              res.status(200).json({
                data: update[1].dataValues,
                message: 'You have modified the center successfully',
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err.message
              });
            });
        } else {
          res.status(204).end();
        }
      });
  }

  /**
 * @description get all centers
 * @param {*} req Http request
 * @param {*} res http response
 * @returns {JSON} returns a JSON object
 */
  static getAllCenters(req, res) {
    db.Center.findAll({})
      .then((centers) => {
        res.status(200).json({
          success: 'ok',
          data: centers
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }

  /**
 * @description get one center
 * @param {*} req Http request
 * @param {*} res http response
 * @returns {JSON} returns a JSON object
 */
  static getOneCenter(req, res) {
    const { id } = req.params;
    db.Center.findOne({
      where: {
        id
      },
      include: [{
        model: db.Event
      }]
    })
      .then((center) => {
        if (center) {
          res.status(200).json({
            success: 'ok',
            data: center
          });
        } else {
          res.status(404).json({
            success: 'false',
            message: 'center cannot be found'
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }
}

export default centercontroller;
