import db from '../models/index';

/**
 * @class userController
 */
class userController {
  /**
   * @description user sign up
   * @param {*} req Http request
   * @param {*} res Http response
   * @returns  {JSON} Returns a JSON object
   */
  static signup(req, res) {
    const {
      username,
      email,
      password
    } = req.body;

    db.User.findOne({
      where: {
        [db.Sequelize.Op.or]: [{ username }, { email }]
      }
    })
      .then((result) => {
        if (result) {
          if (result.username === username) {
            res.status(409).json({
              message: 'username already exists'
            });
          } else if (result.email === email) {
            res.status(409).json({
              message: 'email already exists'
            });
          }
        } else {
          db.User.create({
            username,
            email,
            password
          })
            .then((newUser) => {
              res.status(201).json({
                message: `${newUser.username}, you have successfully created an account`,
              });
            })
            .catch((err) => {
              res.status(500).json({
                message: err.message || 'Internal Server Error'
              });
            });
        }
      });
  }
}

export default userController;
