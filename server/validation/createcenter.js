const createCenterValidator = (req, res, next) => {
  let { availability } = req.body;
  req.checkBody('name', 'Name field must not be empty').notEmpty();
  req.checkBody('name', 'Name should consist of only alphanumeric characters')
    .matches(/^[A-Za-z0-9 ]*$/);
  req.checkBody('name', 'Name input must have a maximum length \n' +
    'length of 100 characters').len(1, 100);
  req.checkBody('location', 'Location field must not be empty').notEmpty();
  req.checkBody('location', 'Location name must have a minimum length of\n 2' +
   ' characters and a maximum length of 255 characters').len(2, 255);
  req.checkBody('location', 'Location input must consist of alphanumeric \n' +
    'characters and special characters (? - , .), and it must include at \n' +
      'least one alphabet').matches(/^(?=.*[ a-zA-Z])([ a-zA-Z0-9,.?-]+)*$/);
  req.checkBody('description', 'Description field must not be empty').notEmpty();
  req.checkBody('description', 'Description must consist of alphanumeric \n' +
    'characters and special characters (? - , .), and it must include at \n' +
      'least one alphabet')
    .matches(/^(?=.*[ a-zA-Z])([ a-zA-Z0-9,.?-]+)*$/);
  req.checkBody('suitablefor', 'Suitable for field must not be empty').notEmpty();
  req.checkBody('facilities', 'Facilities field must not be empty').notEmpty();
  req.checkBody('availability', 'Availability field must not be empty').notEmpty();
  availability = availability.trim().toLowerCase();
  if (availability !== 'not available' && availability !== 'available') {
    return res.status(400).json({
      message: 'Invalid input. Please enter either \'available\' or \'not available\''
    });
  }
  next();
};
export default createCenterValidator;

