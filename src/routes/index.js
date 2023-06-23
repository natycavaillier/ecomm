import categoryRoutes from './categoryRoutes.js';
import productRoutes from './productRoutes.js';

const routes = (app) => {
  app.use(
    categoryRoutes,
    productRoutes,
  );
};

export default routes;
