import {Router} from 'express';
import ticketController from '../controllers/ticket.js';
import authorizationMiddleware from '../middlewares/authorizationMiddleware.js';

const router =Router();

router.post('/:cid/purchase', authorizationMiddleware.authorizeUser, ticketController.finalizePurchase);

export default router;
