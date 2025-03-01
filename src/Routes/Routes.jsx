import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
