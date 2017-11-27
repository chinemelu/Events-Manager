import express from 'express';
import centerController from '../controllers/centercontroller';
import createCenterValidator from '../validation/createcenter';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';
import isAdmin from '../auth/isAdmin';
import isInvalidIdValidator from '../validation/isInvalidId';

const router = express.Router();

router.post(
  '/', createCenterValidator, authenticatetoken, checkForInvalidUser,
  isAdmin, centerController.addCenter
);
router.put('/:id', isInvalidIdValidator, authenticatetoken, centerController.modifyCenterDetails);
router.get('/', centerController.getAllCenters);
router.get('/:id', isInvalidIdValidator, createCenterValidator, centerController.getOneCenter);

export default router;
