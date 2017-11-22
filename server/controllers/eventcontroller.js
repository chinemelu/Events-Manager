import db from '../models/index';

/**
 * @class eventcontroller
 */
class eventcontroller {
/**
   * @description add events
   * @param {*} req http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static addEvent(req, res) {
    const { userId } = req.decoded;
    const {
      title,
      description,
      numberofattendees,
      eventtype,
      eventsetup,
      additionalcomments,
      centerId,
      isPrivate,
      startdatetime,
      enddatetime,
      imageurl,
    } = req.body;
    db.Event.create({
      title,
      description,
      numberofattendees,
      eventtype,
      eventsetup,
      additionalcomments,
      centerId,
      isPrivate,
      startdatetime,
      enddatetime,
      imageurl,
      userId
    })
      .then((event) => {
        res.status(201).json({
          message: 'You have successfully added an event',
          data: event
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error.message || 'Internal Server Error'
        });
      });
  }
}

export default eventcontroller;
