import React from "react";
import { Link, NavLink } from "react-router";
import { IoMdMenu } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
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
      <div className="navbar-end gap-x-4">
        {user ? (
          <>
            <NavLink>Profile</NavLink>
            <button
              onClick={() => handleLogout()}
              className="btn btn-outline btn-primary"
            >
              Logout
            </button>
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
