const getValidationResult = (req, res, next) => {
  req.getValidationResult()
    .then((result) => {
      if (!result.isEmpty()) {
        const errors = result.array().map(elem => elem.msg);
        res.status(400).json({
          errors: errors.param
        });
      } else {
        next();
      }
    });
};

export default getValidationResult;
