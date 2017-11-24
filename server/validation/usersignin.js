
const userSignInValidator = (req, res, next) => {
  const {
    username,
    password
  } = req.body;
  req.checkBody('username', 'username and password required').notEmpty();
  req.checkBody('password', 'username and password required').notEmpty();
  req.sanitize('username').trim();
  req.sanitize('username').toLowerCase();
  req.sanitize('password').trim();
  req.sanitize('password').toLowerCase();

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

