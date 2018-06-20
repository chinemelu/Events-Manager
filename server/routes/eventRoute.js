import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import eventController from '../controllers/eventcontroller';
// import createEventValidator from '../validation/createevent';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';
import isDateValid from '../validation/isdatevalid';
import isInvalidIdValidator from '../validation/isInvalidId';
import doesCenterExist from '../validation/doesCenterExist';

const router = express.Router();

router.post(
  '/', authenticatetoken, doesCenterExist, eventController.addEvent
);
router.delete(
  '/:id', isInvalidIdValidator, authenticatetoken,
  eventController.deleteEvent
);
router.put(
  '/:id', isInvalidIdValidator, authenticatetoken, eventController.modifyEvent
);
router.get('/:id', eventController.getOneEvent);

router.get('/', eventController.getAllEvents);


export default router;

