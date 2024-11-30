import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from './ui/Error';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import { loaderMenu } from "./features/menu/menuLoader";
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children:
        [
          { path: '/', element: <Home />, },
          {
            path: '/menu',
            element: <Menu />,
            errorElement: <Error />,
            loader: loaderMenu
          },
          { path: '/cart', element: <Cart />, },
          { path: '/order/new', element: <CreateOrder />, },
          { path: '/order/:orderId', element: <Order />, },
        ]
    },
  ]
);

function App ()
{
  return (
    <RouterProvider router={router} />
  );
}

export default App;
