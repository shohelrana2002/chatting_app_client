import React from "react";
import NavBar from "../Pages/Dashboard/Pages/NavBar";
import { Outlet } from "react-router";
import Login from "../Pages/Login/Login";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  return (
    <>
      {user ? (
        <>
          <div className="flex gap-x-12 justify-between">
            <div>
              <NavBar />
            </div>
            <div className="w-full mt-6">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default DashboardLayout;
