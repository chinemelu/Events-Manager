const isInvalidIdValidator = (req, res, next) => {
  req.checkParams('id', 'Invalid Id').isUUID();
  next();
};
export default isInvalidIdValidator;

