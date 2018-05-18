import express from 'express';
import eventTypesController from '../controllers/eventtypescontroller';

const router = express.Router();

router.get('/', eventTypesController.getAllEventTypes);

export default router;
