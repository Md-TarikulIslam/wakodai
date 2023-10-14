import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Homepage from "../Pages/Homepage/Homepage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import CommonPage from "../Shared/CommonPage";
import Media from "../Pages/Media";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "*",
        element: <CommonPage />,
      },
    ],
  },
]);
export default router;
