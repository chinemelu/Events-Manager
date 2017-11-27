const createEventValidator = (req, res, next) => {
  req.checkBody('title', 'Title field must not be empty').notEmpty();
  req.checkBody('title', 'Title should consist of only alphanumeric characters')
    .matches(/^[A-Za-z0-9 ]*$/);
  req.checkBody('description', 'Description field must not be empty').notEmpty();
  req.checkBody('description', 'Description must consist of alphanumeric \n' +
    'characters and special characters (? - , .), and it must include at \n' +
      'least one alphabet')
    .matches(/^(?=.*[ a-zA-Z])([ a-zA-Z0-9,.?-]+)*$/);
  req.checkBody('numberofattendees', 'Number of attendees field must not be empty').notEmpty();
  req.checkBody('numberofattendees', 'Number of attendees input must be an integer').isInt();
  req.checkBody('centerId', 'centerId must not be empty').notEmpty();
  req.checkBody('centerId', 'Invalid CenterId').isUUID();
  req.checkBody('startdatetime', 'Start date and time must not be empty').notEmpty();
  req.checkBody('startdatetime', 'the date must be in the yyyy-mm-dd format').isValidDate();
  req.checkBody('enddatetime', 'End date and time must not be empty').notEmpty();
  req.checkBody('enddatetime', 'the date must be in the yyyy-mm-dd format').isValidDate();

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
export default createEventValidator;
