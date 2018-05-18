import validator from 'validator';
import isempty from 'lodash/isEmpty';

const loginValidator = (data) => {
  const errors = {};
  data.username = data.username.trim().toLowerCase();
  data.password = data.password.trim();

  if (validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isempty(errors)
  };
};

export default loginValidator;

