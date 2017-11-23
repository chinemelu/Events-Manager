const createCenterValidator = (req, res, next) => {
  const {
    name,
    location,
    description,
    suitablefor,
    facilities,
    availability
  } = req.body;
  req.checkBody('name', 'Name field must not be empty').notEmpty();
  req.checkBody('location', 'Location field must not be empty').notEmpty();
  req.checkBody('description', 'Description field must not be empty').notEmpty();
  req.checkBody('suitablefor', 'Suitable for field must not be empty').notEmpty();
  req.checkBody('facilities', 'Facilities field must not be empty').notEmpty();
  req.checkBody('availability', 'Availability field must not be empty').notEmpty();
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
export default createCenterValidator;

