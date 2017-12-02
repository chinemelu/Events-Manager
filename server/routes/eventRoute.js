import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import eventController from '../controllers/eventcontroller';
import createEventValidator from '../validation/createEvent';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';
import isDateValid from '../validation/isDateValid';
import isInvalidIdValidator from '../validation/isInvalidId';
import isValidCenterIdValidator from '../validation/isValidCenterId';
import doesCenterExist from '../validation/doesCenterExist';

const router = express.Router();

router.post(
  '/', createEventValidator, getValidationResult, authenticatetoken, checkForInvalidUser,
  isValidCenterIdValidator, doesCenterExist, isDateValid, eventController.addEvent
);
router.delete(
  '/:id', isInvalidIdValidator, getValidationResult, authenticatetoken, checkForInvalidUser,
  eventController.deleteEvent
);
router.put(
  '/:id', isInvalidIdValidator, getValidationResult, authenticatetoken, checkForInvalidUser,
  isValidCenterIdValidator, doesCenterExist, isDateValid, eventController.modifyEvent
);

export default router;

