import jwt from 'jsonwebtoken';
import toLowerCase from '../inputHandler/toLowerCase';
import trimWhiteSpace from '../inputHandler/trimWhiteSpace';
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
    toLowerCase(trimWhiteSpace(username));
    toLowerCase(trimWhiteSpace(email));

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

    if (!username || !password) {
      res.status(400).json({ message: 'username and password required' });
    } else {
      db.User.getUsername(toLowerCase(trimWhiteSpace(username)), (user) => {
        if (!user) {
          res.status(401).json({ message: 'username or password is incorrect' });
        } else {
          db.User.prototype.verifyPassword(
            toLowerCase(trimWhiteSpace(password)),
            user.password, (isMatch) => {
              if (isMatch) {
                const payload = {
                  userId: user.id,
                  isAdmin: user.isAdmin
                };

                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: '200h'
                });

                res.status(200).json({
                  message: 'Token generated. Sign in successful',
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
}

export default userController;
