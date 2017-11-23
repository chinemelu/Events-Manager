const createEventValidator = (req, res, next) => {
  const {
    title,
    description,
    numberofattendees,
    eventtype,
    eventsetup,
    additionalcomments,
    centerId,
    isPrivate,
    startdatetime,
    enddatetime,
    imageurl
  } = req.body;
  req.checkBody('title', 'Title field must not be empty').notEmpty();
  req.checkBody('description', 'Description field must not be empty').notEmpty();
  req.checkBody('numberofattendees', 'Number of attendees field must not be empty').notEmpty()
  req.checkBody('numberofattendees', 'Number of attendees input must be an integer').isInt();
  req.checkBody('centerId', 'centerId must not be empty').notEmpty();
  req.checkBody('centerId', 'centerId input must be an integer').notEmpty();
  req.checkBody('startdatetime', 'Start date and time must not be empty').notEmpty();

  req.checkBody('enddatetime', 'End date and time must not be empty').notEmpty();
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
