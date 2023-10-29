import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },
  ]);

export default router;