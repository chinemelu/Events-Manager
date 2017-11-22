import express from 'express';
import usercontroller from '../controllers/usercontroller';
import userSignUpValidator from '../validation/usersignup';

const router = express.Router();

router.post('/', userSignUpValidator, usercontroller.signup);
router.post('/login', usercontroller.login);

export default router;
