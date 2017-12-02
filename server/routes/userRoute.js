import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import usercontroller from '../controllers/usercontroller';
import userSignUpValidator from '../validation/userSignUp';
import userSignInValidator from '../validation/userSignIn';

const router = express.Router();

router.post('/', userSignUpValidator, getValidationResult, usercontroller.signup);
router.post('/login', userSignInValidator, getValidationResult, usercontroller.login);

export default router;
