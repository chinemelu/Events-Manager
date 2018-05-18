import db from '../models/index';

/**
 * @class eventSetUpController
 */
class eventSetUpController {
  /**
   * @description get all facilities
   * @param {*} req Http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static getAllEventSetUps(req, res) {
    db.EventSetUp.findAll({})
      .then((setups) => {
        res.status(200).json({
          success: 'ok',
          data: setups
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }
}

export default eventSetUpController;
