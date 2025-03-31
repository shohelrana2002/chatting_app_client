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
  // 81 82 83 84 85 86 87 88 89 90
  // 91 92 93 94 95 96 97 98 99 100
  // 101 102 103 104 105 106 107 108 109 110
  // 111 112 113 114 115 116 117 118 119 120
  // 121 122 123 124 125 126 127 128 129 130
  // 131 132 133 134 135 136 137 138 139 140
  // 141 142 143 144 145 146 147 148 149 150
  // 161 162 163 164 165 166 167 168 169 170
  // 171 172 173 174 175 176 177 178 179 18
  return (
    <div className="max-w-[1400px] mx-auto">
      {user ? (
        <>
          <div className="flex gap-x-12 h-screen justify-between">
            <div>
              <NavBar />
            </div>
            <div className="w-full  h-full mt-6">
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
