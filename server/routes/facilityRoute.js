import express from 'express';
import facilityController from '../controllers/facilitycontroller';

const router = express.Router();
router.get('/', facilityController.getAllFacilities);
export default router;
