import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
          path: '/menu',
          element: <MenuPage></MenuPage>
        }
    ]
  },
]);

export default router;
