import express from 'express';
import eventSetUpController from '../controllers/eventsetupcontroller';

const router = express.Router();

router.get('/', eventSetUpController.getAllEventSetUps);

export default router;
