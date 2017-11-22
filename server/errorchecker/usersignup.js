const userSignUpErrorChecker = (req, res, next) => {
  const {
    username,
    isAdmin,
    email,
    password
  } = req.body;
  req.checkBody('username', 'Username field must not be empty.').notEmpty()
    .matches(/^(?=.*[a-z])[a-z0-9_]{4,15}\s*$/);
  req.checkBody('email', 'Email field must not be empty').notEmpty();
  req.checkBody('email', 'The email you entered is invalid, please try again.')
    .isEmail();
  req.checkBody('password', 'Password field must not be empty').notEmpty();
  req.checkBody('reEnterPassword', 'Passwords do not match, please try again.')
    .equals(password);
  req.getValidationResult()
    .then((result) => {
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
export default userSignUpErrorChecker;

