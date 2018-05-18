import express from 'express';
import getValidationResult from '../validation/getValidationResult';
import usercontroller from '../controllers/usercontroller';
import userSignUpValidator from '../validation/usersignup';
// import userSignInValidator from '../validation/usersignin';
// import checkForIncorrectCredentials from '../validation/incorrectCredentials';
// import frontendValidation from '../validation/frontEndValidation';

const router = express.Router();

router.post('/', userSignUpValidator, getValidationResult, usercontroller.signup);
router.get('/:parameter', usercontroller.checkUserExists);
router.post('/login', usercontroller.login);

export default router;
