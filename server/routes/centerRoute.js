import express from 'express';
import centerController from '../controllers/centercontroller';
import createCenterValidator from '../validation/createcenter';
import authenticatetoken from '../auth/authenticatetoken';
import checkForInvalidUser from '../validation/checkForInvalidUser';

const router = express.Router();

router.post('/', createCenterValidator, authenticatetoken, checkForInvalidUser, centerController.addCenter);
router.put('/:id', createCenterValidator, authenticatetoken, centerController.modifyCenterDetails);
router.get('/', centerController.getAllCenters);
router.get('/:id', centerController.getOneCenter);

export default router;
