import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeDashboard from "../Pages/Dashboard/Home/HomeDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, //
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
    ],
  },
]);
