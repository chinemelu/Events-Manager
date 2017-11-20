import express from 'express';
import usercontroller from '../controllers/usercontroller';
import userSignUpErrorChecker from '../errorchecker/usersignup';

const router = express.Router();

router.post('/', userSignUpErrorChecker, usercontroller.signup);

export default router;
