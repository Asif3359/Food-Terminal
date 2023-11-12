
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<div className="h-[100vh] flex justify-center items-center" >Sorry This page is not correct</div>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "menu",
          element: <Menu/>,
        },
        {
          path: "order/:category",
          element: <Order/>,
        },
      ],
    },
  ]);

  export default router