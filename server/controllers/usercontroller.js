import jwt from 'jsonwebtoken';
import db from '../models/index';
import validation from '../validation/frontEndValidation';
import loginValidator from '../validation/loginValidation';
import checkForExistingData from '../validation/existingData';
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
    checkForExistingData(req.body, validation)
      .then(({ errors, isValid }) => {
        if (isValid) {
          const {
            username,
            email,
            password
          } = req.body;
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
        } else if (errors.usernameExists || errors.emailExists) {
          res.status(409).json(errors);
        } else {
          res.status(400).json(errors);
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
    const { errors, isValid } = loginValidator(req.body);
    if (isValid) {
      const {
        username,
        password
      } = req.body;

      db.User.getUsername(username, (user) => {
        if (!user) {
          res.status(401).json({ errors: { form: 'username or password is incorrect' } });
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
              res.status(401).json({ errors: { form: 'username or password is incorrect' } });
            }
          });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  }

  /**
 * @description user existence validation
 * @param {*} req http request
 * @param {*} res http response
 * @returns {JSON} Returns a JSON object
*/
  static checkUserExists(req, res) {
    return db.User.findOne({
      attributes: ['username', 'email'],
      where: {
        [db.Sequelize.Op.or]: [{ username: req.params.parameter }, { email: req.params.parameter }]
      }
    })
      .then((user) => {
        if (user) {
          res.json({ user });
        } else res.json({ user: null });
      });
  }
}

export default userController;
