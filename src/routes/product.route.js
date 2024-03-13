import {Router} from 'express';
import productController from '../controllers/product.js';
import authorizationMiddleware from '../middlewares/authorizationMiddleware.js';

const router = Router();

router.post('/', authorizationMiddleware.authorizeAdmin, productController.createProduct);
router.put('/:id', authorizationMiddleware.authorizeAdmin, productController.updateProduct);
router.delete('/:id', authorizationMiddleware.authorizeAdmin, productController.deleteProduct);

export default router;
