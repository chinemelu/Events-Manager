import express from 'express';
import eventController from '../controllers/eventcontroller';
import createEventErrorChecker from '../errorchecker/createevent';
import authenticatetoken from '../auth/authenticatetoken';

const router = express.Router();
router.post('/', createEventErrorChecker, authenticatetoken, eventController.addEvent);
