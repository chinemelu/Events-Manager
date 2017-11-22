import db from '../models';

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

export default centercontroller;
