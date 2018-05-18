
import validator from 'validator';
import isempty from 'lodash/isEmpty';

const createEventValidator = (data) => {
  const errors = {};
  data.eventname = data.eventname.trim();
  data.description = data.description.trim();
  data.numberofattendees = data.numberofattendees.trim();
  data.startdate = data.startdate.trim();
  data.enddate = data.enddate.trim();

  const isValidDate = (value) => {
    if (!value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) return false;
    return true;
  };

  if (validator.isEmpty(data.eventname)) {
    errors.eventname = 'Event name field must not be empty';
  } else if (!validator.matches(data.eventname, /^[A-Za-z0-9 ]*$/)) {
    errors.eventname = 'Event name should consist of only alphanumeric characters';
  }
  if (validator.isEmpty(data.description)) {
    errors.description = 'Description field must not be empty';
  } else if (!validator.matches(data.description, /^(?=.*[ a-zA-Z])([ a-zA-Z0-9,.?-]+)*$/)) {
    errors.description = 'Description must consist of alphanumeric \n' +
        'characters and special characters (? - , .), and it must include at \n' +
          'least one alphabet';
  }
  if (validator.isEmpty(data.numberofattendees)) {
    errors.numberofattendees = 'Number of attendees field must not be empty';
  } else if (!validator.isInt(data.numberofattendees)) {
    errors.numberofattendees = 'Number of attendees input must be an integer';
  }
  if (data.additionaldetails && !validator.matches(data.additionaldetails, /^(?=.*[ a-zA-Z])([ a-zA-Z0-9,.?-]+)*$/)) {
    errors.additionaldetails = 'Additional details input must consist of alphanumeric \n' +
        'characters and special characters (? - , .), and it must include at \n' +
          'least one alphabet';
  }
  if (validator.matches(data.eventtype, 'Please select')) {
    errors.eventtype = 'Please select a type of event';
  }
  if (validator.matches(data.selectcenter, 'Select center')) {
    errors.selectcenter = 'Please select a center';
  }
  if (validator.isEmpty(data.startdate)) {
    errors.startdate = 'Start date must not be empty';
  } else if (isValidDate(data.startdate) !== true) {
    errors.startdate = 'The date must be in the DD/MM/YYYY format';
  }
  if (validator.isEmpty(data.enddate)) {
    errors.enddate = 'End date must not be empty';
  } else if (isValidDate(data.enddate) !== true) {
    errors.enddate = 'The date must be in the DD/MM/YYYY format';
  }
  return {
    errors,
    isValid: isempty(errors)
  };
};

export default createEventValidator;

