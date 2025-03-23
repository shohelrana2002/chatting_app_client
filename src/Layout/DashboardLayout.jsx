import React from "react";
import NavBar from "../Pages/Dashboard/Pages/NavBar";
import { Outlet } from "react-router";
import Login from "../Pages/Login/Login";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  // 4 5 6 7 8 9 10
  // 11 12 13 14 15 16 17 18 19 20
  // 21 22 23 24 25 26 27 28 29 30
  // 31 32 33 34 35 36 37 38 39 40
  // 41 42 43 44 45 46 47 48 49 50
  // 51 52 53 54 55 56 57 58 59 60
  // 61 62 63 64 65 66 67 68 69 70
  // 71 72 73 74 75 76 77 78 79 80
  // 81 82 83 84
  return (
    <div className="max-w-[1400px] mx-auto">
      {user ? (
        <>
          <div className="flex gap-x-12 h-screen justify-between">
            <div>
              <NavBar />
            </div>
            <div className="w-full overflow-y-auto h-full mt-6">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
