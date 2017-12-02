
const isValidCenterIdValidator = (req, res, next) => {
  req.checkParams('id', 'Invalid centerId').isUUID();
  next();
};

export default isValidCenterIdValidator;
