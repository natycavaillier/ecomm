import express from 'express';
import categoryRoutes from './categoryRoutes.js';
import productRoutes from './productRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    categoryRoutes,
    productRoutes,
  );
};

export default routes;
