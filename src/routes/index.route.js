import express from 'express';
import userRoutes from './user.route.js';
import productRoutes from './product.route.js';
import cartRoutes from './cart.route.js';
import ticketRoutes from './ticket.route.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/carts', cartRoutes);
router.use('/tickets', ticketRoutes);

export default router;
