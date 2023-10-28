import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useToken } from "@/utils/contexts/token";
import RegisterPage from "@/pages/auth/register";
import ProductsPage from "@/pages/products";
import HijabPage from "@/pages/products/hijab";
import HijablessPage from "@/pages/products/nonHijab";
import LoginPage from "@/pages/auth/login";
import Home from "@/pages";

export default function Router() {
  const { token } = useToken();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: token === "" ? <Navigate to="/" /> : <ProductsPage />,
    },
    {
      path: "/products/hijab",
      element: token === "" ? <Navigate to="/" /> : <HijabPage />,
    },
    {
      path: "/products/nonHijab",
      element: token === "" ? <Navigate to="/" /> : <HijablessPage />,
    },
    {
      path: "/login",
      element: token !== "" ? <Navigate to="/" /> : <LoginPage />,
    },
    {
      path: "/register",
      element: token !== "" ? <Navigate to="/" /> : <RegisterPage />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
