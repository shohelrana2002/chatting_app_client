import React from "react";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";

const GroupFriendsList = () => {
  return (
    <div className="shadow">
      <label className="input z-10">
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
      <div className="shadow-xl rounded-2xl px-6">
        <>
          <DashBoardTitle groupName="Group List" />
        </>
        <DashBoardLink name={"Friends"} address="DinajPur" buttonName="Join" />
        <DashBoardLink name={"Friends"} address="DinajPur" buttonName="Join" />
      </div>
    </div>
  );
};

export default GroupFriendsList;
