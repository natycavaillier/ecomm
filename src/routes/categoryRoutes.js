import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();

router
  .get('/categories', CategoryController.findCategories)
  .get('/categories/:id', CategoryController.findCategoryById)
  .post('/admin/categories', CategoryController.createCategory)
  .put('/admin/categories/:id', CategoryController.updateCategory)
  .put('/admin/categories/activate/:id', CategoryController.activateCategory)
  .delete('/admin/categories/:id', CategoryController.deleteCategory);

export default router;
