import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeDashboard from "../Pages/Dashboard/Home/HomeDashboard";
import Message from "../Pages/Dashboard/Pages/Message";
import Setting from "../Pages/Dashboard/Pages/Setting";
import NotificationUser from "../Pages/Dashboard/Pages/NotificationUser";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <HomeDashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/message",
        element: (
          <PrivateRoutes>
            <Message />
          </PrivateRoutes>
        ),
      },
      {
        path: "/notification-user",
        element: (
          <PrivateRoutes>
            <NotificationUser />
          </PrivateRoutes>
        ),
      },
      {
        path: "/setting",
        element: <PrivateRoutes></PrivateRoutes>,
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
