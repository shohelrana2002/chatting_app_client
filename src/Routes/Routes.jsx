import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeDashboard from "../Pages/Dashboard/Home/HomeDashboard";
import Message from "../Pages/Dashboard/Pages/Message";
import Setting from "../Pages/Dashboard/Pages/Setting";
import NotificationUser from "../Pages/Dashboard/Pages/NotificationUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/notification-user",
        element: <NotificationUser />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },

  { path: "/register", element: <Register /> },
  {
    path: "/login",
    element: <Login />,
  },
]);
