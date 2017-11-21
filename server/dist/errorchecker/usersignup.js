'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const userSignUpErrorChecker = (req, res, next) => {
  const {
    username,
    isAdmin,
    email,
    password
  } = req.body;
  req.checkBody('username', 'Username field must not be empty.').notEmpty();
  req.checkBody('username', 'Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.').matches(/^(?=.*[a-z])[a-z0-9_]{4,15}\s*$/);
  req.checkBody('email', 'Email field must not be empty').notEmpty();
  req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
  req.checkBody('email', 'The alphabets in the email must be lowercase').isLowercase();
  req.checkBody('password', 'Password field must not be empty').notEmpty();
  req.checkBody('password', 'Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,100}$/);
  req.checkBody('reEnterPassword', 'Passwords do not match, please try again.').equals(password);
  req.getValidationResult().then(result => {
    if (!result.isEmpty()) {
      const errors = result.array().map(elem => elem.msg);
      res.status(400).json({
        errors
      });
    } else {
      next();
    }
  });
};
exports.default = userSignUpErrorChecker;