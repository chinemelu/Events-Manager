import db from '../models/index';

/**
 * @class eventTypesController
 */
class eventTypesController {
  /**
   * @description get all facilities
   * @param {*} req Http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static getAllEventTypes(req, res) {
    db.EventType.findAll({})
      .then((eventTypes) => {
        res.status(200).json({
          success: 'ok',
          data: eventTypes
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }
}

export default eventTypesController;
