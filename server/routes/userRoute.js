import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import usercontroller from '../controllers/usercontroller';
import userSignUpValidator from '../validation/usersignup';
import userSignInValidator from '../validation/usersignin';

const router = express.Router();

router.post('/', userSignUpValidator, getValidationResult, usercontroller.signup);
router.post('/login', userSignInValidator, getValidationResult, usercontroller.login);

export default router;
