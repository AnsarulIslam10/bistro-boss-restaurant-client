import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage/MenuPage";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
