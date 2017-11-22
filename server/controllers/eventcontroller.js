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
  /**
   * @description edit events
   * @param {*} req http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static modifyEvent(req, res) {
    const {
      title,
      description,
      numberofattendees,
      eventtype,
      eventsetup,
      additionalcomments,
      centerId,
      isPrivate,
      imageurl,
      startdatetime,
      enddatetime
    } = req.body;
    const { id } = req.params;
    db.Event.findById(id)
      .then((event) => {
        if (event) {
          if (event.userId !== req.decoded.userId) {
            res.status(403).json({
              message: 'You are not authorised to edit this event'
            });
          } else {
            event.update({
              title,
              description,
              numberofattendees,
              eventtype,
              eventsetup,
              additionalcomments,
              centerId,
              isPrivate,
              imageurl,
              startdatetime,
              enddatetime
            })
              .then(() => {
                res.status(200).json({
                  message: 'You have successfully modified the event',
                  data: event
                });
              });
          }
        } else {
          res.status(204).end();
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal Server Error'
        });
      });
  }

  /**
   * @description delete event
   * @param {*} req Http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static deleteEvent(req, res) {
    const { id } = req.params;
    db.Event.findById(id)
      .then((event) => {
        if (event) {
          if (event.userId !== req.decoded.userId) {
            res.status(403).json({
              message: 'You are not authorised to delete this event'
            });
          } else {
            db.event.destroy({
              where: {
                id: event.id
              }
            })
              .then(() => {
                res.status(200).json({
                  message: 'You have deleted the event Successfully'
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

export default eventcontroller;

