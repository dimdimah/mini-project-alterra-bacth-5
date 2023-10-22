import LandingPage from "../pages/landingPage";
import Products from "../pages/products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
