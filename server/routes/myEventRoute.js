import express from 'express';
import eventController from '../controllers/eventcontroller';
import authenticatetoken from '../auth/authenticatetoken';


const router = express.Router();
router.get('/', authenticatetoken, eventController.getMyEvents);

export default router;