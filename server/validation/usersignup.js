const userSignUpValidator = (req, res, next) => {
  req.checkBody('username', 'Username field must not be empty.').notEmpty();
  // req.checkBody('username', 'Username should consist of only alphanumeric \n' +
  // 'characters and must contain no spaces between characters').matches(/^[A-Za-z0-9]*$/);
  // req.checkBody('username', 'Username must have a minimum length of 4 characters and a maximum \n' +
  //   'length of 15 characters').len(4, 15);
  req.checkBody('email', 'Email field must not be empty').notEmpty();
  // req.sanitize('email').trimtoLowerCase();
  // req.checkBody('email', 'The email you entered is invalid, please try again.')
  //   .isEmail();
  req.checkBody('password', 'Password field must not be empty').notEmpty();
  // req.checkBody('password', 'Password must have a minimum length of 8 characters and \n' +
  //   'a maximum length of 100 characters').len(8, 100);
  // req.checkBody('reEnterPassword', 'Passwords do not match, please try again.')
  //   .equals(req.sanitize('password').trimtoLowerCase());
  // req.sanitize('username').trimtoLowerCase();
  // req.sanitize('password').trimtoLowerCase();
  // req.sanitize('reEnterPassword').trimtoLowerCase();
  next();
};
export default userSignUpValidator;

