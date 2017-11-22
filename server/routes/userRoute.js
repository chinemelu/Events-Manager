import express from 'express';
import usercontroller from '../controllers/usercontroller';
import userSignUpErrorChecker from '../validation/usersignup';

const router = express.Router();

router.post('/', userSignUpErrorChecker, usercontroller.signup);
router.post('/login', usercontroller.login);

export default router;
