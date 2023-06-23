import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router
  .get('/products', ProductController.findProducts)
  .get('/products/:id', ProductController.findProductById)
  .post('/admin/products', ProductController.createProduct)
  .put('/admin/products/:id', ProductController.updateProduct)
  .delete('/admin/products/:id', ProductController.deleteProduct);

export default router;
