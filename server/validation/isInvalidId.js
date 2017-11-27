const isInvalidIdValidator = (req, res, next) => {
  req.checkParams('id', 'Invalid Id').isUUID();

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
export default isInvalidIdValidator;

