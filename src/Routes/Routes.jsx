import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Message from "../Pages/Dashboard/Pages/Message";
import Setting from "../Pages/Dashboard/Pages/Setting";
import NotificationUser from "../Pages/Dashboard/Pages/NotificationUser";
import PrivateRoutes from "./PrivateRoutes";
import { lazy } from "react";
import { Suspense } from "react";
import Spinner from "../Components/LoadingSpinner/Spinner";
const HomeDashboard = lazy(() =>
  import("../Pages/Dashboard/Home/HomeDashboard")
);
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
            <Suspense fallback={<Spinner />}>
              <HomeDashboard />
            </Suspense>
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
        element: (
          <PrivateRoutes>
            <Setting />
          </PrivateRoutes>
        ),
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
