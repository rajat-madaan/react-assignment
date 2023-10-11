import './App.css';
import Products from './pages/products';
import Checkout from './pages/checkout';
import Submit from './pages/submit';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },

  {
    path: "/cart",
    element: <Checkout />,
  },

  {
    path: "/submit_order",
    element: <Submit />,
  },

  {
    path: "*",
    element: <div>not found!</div>
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
