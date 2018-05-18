import db from '../models/index';

/**
 * @class facilityController
 */
class facilityController {
  /**
   * @description get all facilities
   * @param {*} req Http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static getAllFacilities(req, res) {
    db.Facility.findAll({})
      .then((facilities) => {
        res.status(200).json({
          success: 'ok',
          data: facilities
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }
}

export default facilityController;
