'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _index2.default.User.findOne({
      where: {
        [_index2.default.Sequelize.Op.or]: [{ username }, { email }]
      }
    }).then(result => {
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
        _index2.default.User.create({
          username,
          email,
          password
        }).then(newUser => {
          res.status(201).json({
            message: `${newUser.username}, you have successfully created an account`
          });
        }).catch(err => {
          res.status(500).json({
            message: err.message || 'Internal Server Error'
          });
        });
      }
    });
  }

  /**
  * @description user login
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
      _index2.default.User.getUsername(username, user => {
        if (!user) {
          res.status(401).json({ message: 'username or password is incorrect' });
        } else {
          _index2.default.User.prototype.verifyPassword(password, user.password, isMatch => {
            if (isMatch) {
              const payload = {
                userId: user.id,
                isAdmin: user.isAdmin
              };

              const token = _jsonwebtoken2.default.sign(payload, process.env.SECRET_KEY, {
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

exports.default = userController;