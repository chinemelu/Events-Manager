import express from 'express';
import centercontroller from '../controllers/centercontroller';
import createCenterErrorChecker from '../errorchecker/createcenter';

const router = express.Router();

router.post('/', createCenterErrorChecker, centercontroller.addCenter);

export default router;
