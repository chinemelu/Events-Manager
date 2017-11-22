import express from 'express';
import eventController from '../controllers/eventcontroller';
import createEventValidator from '../validation/createevent';
import authenticatetoken from '../auth/authenticatetoken';

const router = express.Router();

router.post('/', createEventValidator, authenticatetoken, eventController.addEvent);
router.put('/:id', createEventValidator, authenticatetoken, eventController.modifyEvent);
