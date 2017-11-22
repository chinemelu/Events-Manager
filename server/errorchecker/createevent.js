const createEventErrorChecker = (req, res, next) => {
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
  req.checkBody('description', 'Description field must not be empty`1').notEmpty();
  req.checkBody('numberofattendees', 'Number of attendees field must not be empty').notEmpty();
  req.checkBody('centerId', 'centerId must not be empty').notEmpty();
  req.checkBody('startdatetime', 'Title field must not be empty').notEmpty();
  req.checkBody('enddatetime', 'Location field must not be empty`1').notEmpty();
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
export default createEventErrorChecker;
