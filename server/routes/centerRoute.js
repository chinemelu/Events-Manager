import express from 'express';
import centerController from '../controllers/centercontroller';
import createCenterValidator from '../validation/createcenter';
import authenticatetoken from '../auth/authenticatetoken';

const router = express.Router();

router.post('/', createCenterValidator, authenticatetoken, centerController.addCenter);

