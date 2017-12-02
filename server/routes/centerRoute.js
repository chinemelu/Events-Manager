import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import centerController from '../controllers/centercontroller';
import createCenterValidator from '../validation/createCenter';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';
import isAdmin from '../auth/isAdmin';
import isInvalidIdValidator from '../validation/isInvalidId';

const router = express.Router();

router.post(
  '/', createCenterValidator, getValidationResult, authenticatetoken, checkForInvalidUser,
  isAdmin, centerController.addCenter
);
router.put(
  '/:id', isInvalidIdValidator, getValidationResult, authenticatetoken, checkForInvalidUser,
  isAdmin, createCenterValidator, getValidationResult, centerController.modifyCenterDetails
);
router.get('/', centerController.getAllCenters);
router.get('/:id', isInvalidIdValidator, getValidationResult, centerController.getOneCenter);

export default router;
