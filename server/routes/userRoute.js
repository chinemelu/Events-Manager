import express from 'express';
import usercontroller from '../controllers/usercontroller';
import userSignUpValidator from '../validation/usersignup';
import userSignInValidator from '../validation/usersignin';

const router = express.Router();

router.post('/', userSignUpValidator, usercontroller.signup);
router.post('/login', userSignInValidator, usercontroller.login);

export default router;
