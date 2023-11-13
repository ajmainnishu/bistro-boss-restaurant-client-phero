import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: 'shop/:category',
        element: <Shop />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '*',
        element: <EmptyPage />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'mycart',
        element: <MyCart />
      }
    ]
  }
]);

export default router;