import jwt from 'jsonwebtoken';
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
              const payload = {
                userId: newUser.id,
                role: newUser.role
              };
              const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: '200h'
              });
              res.status(201).json({
                message: `${newUser.username}, you have successfully created an account`,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
                token
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
  /**
 * @description user sign in
 * @param {*} req http request
 * @param {*} res http response
 * @returns {JSON} Returns a JSON object
*/
  static login(req, res) {
    const {
      username,
      password
    } = req.body;

    db.User.getUsername(username, (user) => {
      if (!user) {
        res.status(401).json({ message: 'username or password is incorrect' });
      } else {
        db.User.prototype.verifyPassword(password, user.password, (isMatch) => {
          if (isMatch) {
            const payload = {
              userId: user.id,
              role: user.role
            };

            const token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: '200h'
            });

            res.status(200).json({
              message: 'Token generated. Sign in successful',
              role: user.role,
              success: true,
              token
            });
          } else {
            res.status(401).json({ message: 'username or password is incorrect' });
          }
        });
      }
    });
  }
}

export default userController;
