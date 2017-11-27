
const userSignInValidator = (req, res, next) => {
  req.checkBody('username', 'username and password required').notEmpty();
  req.checkBody('password', 'username and password required').notEmpty();
  req.sanitize('username').trimtoLowerCase();
  req.sanitize('password').trimtoLowerCase();
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
export default userSignInValidator;

