import LandingPage from "../pages/landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
