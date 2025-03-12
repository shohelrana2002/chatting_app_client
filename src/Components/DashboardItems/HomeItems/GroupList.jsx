import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
const GroupList = () => {
  return (
    <div className="">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
      {/* Group list */}
      <div>
        <div className="flex justify-between my-12">
          <h1>Friends</h1>
          <h3>
            <BsThreeDotsVertical />
          </h3>
        </div>
        <DashBoardLink name={"Friends"} address="DinajPur" buttonName="Join" />
        <DashBoardLink name={"Friends"} address="DinajPur" buttonName="Join" />
      </div>
    </div>
  );
};

export default GroupList;
