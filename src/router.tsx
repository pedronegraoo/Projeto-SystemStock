import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import LayoutProducts from "./pages/LayoutProducts";
import AllProducts from "./pages/subpages/AllProducts";
import CreateProduct from "./pages/subpages/CreateProduct";
import ShowProduct from "./pages/subpages/ShowProduct";
import UpdateProduct from "./pages/subpages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <LayoutProducts />,
        children: [
          {
            index: true,
            element: <AllProducts />,
          },
          {
            path: "new",
            element: <CreateProduct />,
          },
          {
            path: ":id",
            element: <ShowProduct />,
          },
          {
            path: ":id/update",
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
