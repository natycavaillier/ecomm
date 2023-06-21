import express from 'express';
import categoryRoutes from './categoryRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    categoryRoutes,
  );
};

export default routes;
