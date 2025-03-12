import React from "react";
import NavBar from "../Pages/Dashboard/Pages/NavBar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex gap-x-12 justify-between">
      <div>
        <NavBar />
      </div>
      <div className="w-full mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
