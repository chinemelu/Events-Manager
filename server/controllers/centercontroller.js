import Promise from 'bluebird';
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
    const eventSetUpIds = req.body.eventSetupIds;
    const facilitiesIds = req.body.facilityIds;
    const {
      name,
      description,
      location
    } = req.body;

    return db.sequelize.transaction(t =>
      db.Center.create({
        userId,
        name,
        description,
        location
      }, { transaction: t })
        .then((center) => {
          const response = res.status(201).json({
            message: 'You have successfully added a center',
            name: center.name,
            centerId: center.id,
            description: center.description,
            location: center.location
          });

          const facilityIds = Promise.map(facilitiesIds, facilityId =>
            db.FacilityCenter.create({
              centerId: center.id,
              facilityId
            }, { transaction: t }));

          const eventsetupIds = Promise.map(eventSetUpIds, eventSetUpId =>
            db.EventSetUpCenter.create({
              centerId: center.id,
              eventSetUpId
            }, { transaction: t }));

          return Promise.all([response, facilityIds, eventsetupIds]);
        }))
      .catch(error =>
        res.status(500).json({
          message: error.message || 'Internal Server Error'
        }));
  }

  /**
   * @description edit center details
   * @param {*} req http request
   * @param {*} res http response
   * @returns {JSON} returns a JSON object
   */
  static modifyCenterDetails(req, res) {
    const { id } = req.params;
    const { isAdmin } = req.decoded;

    const eventSetUpIds = req.body.eventSetupIds;
    const facilitiesIds = req.body.facilityIds;
    const {
      name,
      description,
      location
    } = req.body;

    return db.Center.findById(id)
      .then((result) => {
        if (result) {
          console.log('facilityids', facilitiesIds);
          console.log('setupids', eventSetUpIds);
          return db.sequelize.transaction(t =>
            db.Center.update(
              {
                name,
                description,
                location,
              },
              {
                where: { id },
                returning: true,
                plain: true,
                transaction: t
              }
            )
              .then((center) => {
                const response = res.status(200).json({
                  data: center[1],
                  message: 'You have modified the center successfully',
                });
                const deleteFacilityCenterRows =
                db.FacilityCenter.destroy({
                  where: {
                    centerId: id
                  },
                  transaction: t
                });

                const deleteEventSetUpCenterRows = db.EventSetUpCenter.destroy({
                  where: {
                    centerId: id
                  },
                  transaction: t
                });

                return Promise.all([response, deleteFacilityCenterRows, deleteEventSetUpCenterRows])
                  .then(() => {
                    const facilityIds = Promise.map(facilitiesIds, facilityId =>
                      db.FacilityCenter.create({
                        centerId: id,
                        facilityId
                      }, { transaction: t }));

                    const eventsetupIds = Promise.map(eventSetUpIds, eventSetUpId =>
                      db.EventSetUpCenter.create({
                        centerId: id,
                        eventSetUpId
                      }, { transaction: t }));
                    return Promise.all([facilityIds, eventsetupIds]);
                  });
              }))
            .catch(error =>
              res.status(500).json({
                message: error.message || 'Internal Server Error'
              }));
        }
        return res.status(404).json({
          message: 'center not found'
        });
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
 * @description delete center
 * @param {*} req Http request
 * @param {*} res http response
 * @returns {JSON} returns a JSON object
 */
  static deleteCenter(req, res) {
    const { id } = req.params;
    db.Center.findById(id)
      .then((center) => {
        if (center) {
          if (center.userId !== req.decoded.userId) {
            res.status(403).json({
              message: 'You are not authorised to delete this center'
            });
          } else {
            db.Center.destroy({
              where: {
                id: center.id
              }
            })
              .then(() => {
                res.status(200).json({
                  message: 'You have deleted the center Successfully'
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
 * @description get one center
 * @param {*} req Http request
 * @param {*} res http response
 * @returns {JSON} returns a JSON object
 */
  static getOneCenter(req, res) {
    const { id } = req.params;
    return db.sequelize.transaction(t =>
      db.Center.findOne({
        where: {
          id
        },
        include: [{
          model: db.Event
        },
        {
          model: db.Facility,
          attributes: ['id', 'name']
        },
        {
          model: db.EventSetUp,
          attributes: ['id', 'name']
        }]
      }, { transaction: t })
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
        }))
      .catch((err) => {
        res.status(500).json({
          message: err.message || 'Internal server error',
        });
      });
  }
}

export default centercontroller;
