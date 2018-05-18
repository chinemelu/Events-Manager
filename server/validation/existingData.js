import isempty from 'lodash/isEmpty';
import Promise from 'bluebird';
import db from '../models/index';

const checkForExistingData = (data, otherValidations) => {
  const { errors } = otherValidations(data);

  return Promise.all([
    db.User.findOne({
      where: {
        username: data.username
      }
    })
      .then((user) => {
        if (user) {
          errors.usernameExists = 'Username already exists';
        }
      }),

    db.User.findOne({
      where: {
        email: data.email
      }
    })
      .then((user) => {
        if (user) {
          errors.emailExists = 'Email already exists';
        }
      })
  ])
    .then(() => {
      return {
        errors,
        isValid: isempty(errors)
      };
    });
};

export default checkForExistingData;
