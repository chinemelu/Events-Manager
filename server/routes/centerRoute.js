import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import centerController from '../controllers/centercontroller';
import createCenterValidator from '../validation/createcenter';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';
import isAdmin from '../auth/isAdmin';
import isInvalidIdValidator from '../validation/isInvalidId';

const router = express.Router();

router.post(
  '/', authenticatetoken, centerController.addCenter
);

router.delete(
  '/:id', authenticatetoken, 
  centerController.deleteCenter
);

router.put(
  '/:id', authenticatetoken, centerController.modifyCenterDetails
);
router.get('/', centerController.getAllCenters);
router.get('/:id', isInvalidIdValidator, getValidationResult, centerController.getOneCenter);

export default router;
