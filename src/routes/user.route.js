import {Router} from 'express';
import userController from '../controllers/user.js';

const router = Router();

router.get('/current', userController.getCurrentUser);
export default router;
