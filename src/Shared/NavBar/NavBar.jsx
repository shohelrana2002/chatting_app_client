import React from "react";
import { Link, NavLink } from "react-router";
import { IoMdMenu } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import profile from "/profileImage.avif";
const NavBar = () => {
  const { user, handleLogout } = useAuth();

  const nav = [
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>,
    <li>
      <NavLink to={"/about"}>About</NavLink>
    </li>,
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Chatting Application
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      {/* use */}
      <div className="navbar-end gap-x-4">
        {user ? (
          <>
            <div className="dropdown cursor-pointer dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer mr-4">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-12 h-12 cursor-pointer rounded-full ring ring-offset-2">
                    <img src={profile} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 gap-y-2 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink
                    className="btn btn-outline btn-primary"
                    to="/dashboard"
                  >
                    Dashboard <MdDashboard />
                  </NavLink>
                </li>
                <button
                  onClick={() => handleLogout()}
                  className="btn btn-outline btn-primary"
                >
                  Logout
                </button>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn btn-outline btn-primary">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-outline btn-secondary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
