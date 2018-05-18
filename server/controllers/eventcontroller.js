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
      eventTypeId,
      eventSetUpId,
      additionalcomments,
      centerId,
      isPrivate,
      startdate,
      enddate,
      starttime,
      endtime,
      imageurl,
    } = req.body;

    db.Center.findOne({
      where: {
        id: centerId
      }
    })
      .then((center) => {
        if (center) {
          db.Event.create({
            title,
            description,
            numberofattendees,
            eventTypeId,
            eventSetUpId,
            additionalcomments,
            centerId,
            isPrivate,
            startdate,
            enddate,
            starttime,
            endtime,
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
        } else {
          res.status(404).json({
            message: 'Center does not exist'
          });
        }
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
      eventTypeId,
      eventSetUpId,
      additionalcomments,
      centerId,
      isPrivate,
      imageurl,
      startdate,
      enddate,
      starttime,
      endtime,
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
              eventTypeId,
              eventSetUpId,
              additionalcomments,
              centerId,
              isPrivate,
              imageurl,
              startdate,
              enddate,
              starttime,
              endtime
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
            db.Event.destroy({
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

  /**
   * @description get one Event
   * @param {*} req Http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static getOneEvent(req, res) {
    const { id } = req.params;
    return db.sequelize.transaction(t =>
      db.Event.findOne({
        where: {
          id
        },
        include: [{
          model: db.Center,
          attributes: ['id', 'name']
        }]
      }, { transaction: t })
        .then((event) => {
          if (event) {
            res.status(200).json({
              success: 'ok',
              data: event
            });
          } else {
            res.status(404).json({
              success: 'false',
              message: 'Event cannot be found'
            });
          }
        }))
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }
}

export default eventcontroller;

