const userSignInValidator = (req, res, next) => {
  req.checkBody('username', 'username and password required').notEmpty();
  req.checkBody('password', 'username and password required').notEmpty();
  req.sanitize('username').trimtoLowerCase();
  req.sanitize('password').trimtoLowerCase();
  next();
};
export default userSignInValidator;

