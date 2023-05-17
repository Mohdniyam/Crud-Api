import express from 'express';
import { getProducts, getProductsAll } from '../controller/product.js';
const router = express.Router();

// Define Products Routes

router.route('/products').get(getProducts);
router.route('/productsAll').get(getProductsAll);

export default router;

