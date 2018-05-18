import validator from 'validator';
import isempty from 'lodash/isEmpty';

const validateFrontEnd = (data) => {
  const errors = {};
  data.username = data.username.trim().toLowerCase();
  data.email = data.email.trim().toLowerCase();
  data.password = data.password.trim();
  data.reEnterPassword = data.reEnterPassword.trim();

  if (validator.isEmpty(data.username)) {
    errors.username = 'Username field must not be empty';
  } else if (!validator.matches(data.username, /^[A-Za-z0-9]*$/)) {
    errors.username = 'Username should consist of only alphanumeric \n' +
    'characters and must contain no spaces between characters';
  } else if (!validator.isLength(data.username, { min: 4, max: 15 })) {
    errors.username = 'Username must have a minimum length of 4 characters and a maximum \n' +
      'length of 15 characters';
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field must not be empty';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'The email you entered is invalid, please try again';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field must not be empty';
  } else if (!validator.isLength(data.password, { min: 8, max: 100 })) {
    errors.password = 'Password must have a minimum length of 8 characters and \n' +
    'a maximum length of 100 characters';
  }
  if (!validator.equals(data.reEnterPassword, data.password)) {
    errors.reEnterPassword = 'Passwords do not match, please try again.';
  }
  
  return {
    errors,
    isValid: isempty(errors)
  };
};


export default validateFrontEnd;
