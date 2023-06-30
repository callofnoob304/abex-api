import AdressesRoute from './adressesRoute';
import CategoriesRoute from './categoriesRoute';
import CuponsRoute from './cuponsRoute';
import OrderProductsRoute from './orderProductsRoute';
import OrdersRoute from './ordersRoute';
import PaymentsRoute from './paymentsRoute';
import ProductsRoute from './productsRoute';
import UsersRoute from './usersRoute';

function Routes (app) {
  CuponsRoute(app);
  CategoriesRoute(app);
  AdressesRoute(app);
  OrderProductsRoute(app);
  OrdersRoute(app);
  PaymentsRoute(app);
  ProductsRoute(app);
  UsersRoute(app);
}

export default Routes;