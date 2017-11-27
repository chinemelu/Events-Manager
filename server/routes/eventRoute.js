import express from 'express';
import eventController from '../controllers/eventcontroller';
import createEventValidator from '../validation/createevent';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';
import isdatevalid from '../validation/isdatevalid';
import isInvalidIdValidator from '../validation/isInvalidId';

const router = express.Router();

router.post('/', createEventValidator, authenticatetoken, checkForInvalidUser, isdatevalid, eventController.addEvent);
router.delete('/:id', isInvalidIdValidator, authenticatetoken, eventController.deleteEvent);
router.put('/:id', isInvalidIdValidator, authenticatetoken, eventController.modifyEvent);

export default router;

