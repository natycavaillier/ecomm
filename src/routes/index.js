import productRoutes from './productRoutes.js';
import categoryRoutes from './categoryRoutes.js';

const routes = (app) => {
  app.use(
    categoryRoutes,
    productRoutes,
  );
};

export default routes;
