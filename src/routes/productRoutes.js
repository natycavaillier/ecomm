import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router
  .get('/products', ProductController.findProducts)
  .get('/products/:id', ProductController.findProductById);
//   .post('/admin/products', ProductController.createCategory)
//   .put('/admin/products/:id', ProductController.updateCategory)
//   .delete('/admin/products/:id', ProductController.deleteCategory);

export default router;
