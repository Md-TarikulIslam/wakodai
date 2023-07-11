import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Homepage from "../Pages/Homepage/Homepage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ShopPage from "../Pages/ShopPage/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
      },
    ],
  },
]);
export default router;
