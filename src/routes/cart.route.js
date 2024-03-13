import {Router} from 'express';
import cartController from '../controllers/cart.js';
import authorizationMiddleware from '../middlewares/authorizationMiddleware.js';

const router =Router();

router.post('/:productId/add', authorizationMiddleware.authorizeUser, cartController.addToCart);

export default router;
