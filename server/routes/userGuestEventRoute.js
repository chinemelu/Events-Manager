import express from 'express';
import eventController from '../controllers/eventcontroller';


const router = express.Router();
router.get('/', eventController.getAllUserGuestEvents);


export default router;