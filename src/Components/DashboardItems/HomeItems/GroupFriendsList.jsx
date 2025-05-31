import React, { useEffect, useState } from "react";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";

const GroupFriendsList = () => {
  const [userData, setUserData] = useState([]);
  // console.log(userData);
  useEffect(() => {
    try {
      fetch("user.json")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    } catch (err) {
      alert(err);
    }
  }, []);
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <label className="input fixed top-8 bg-blue-50 z-10">
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
      <div className="shadow-xl  rounded-2xl px-6">
        <>
          <DashBoardTitle groupName="Group List" />
        </>
      </div>
    </div>
  );
};

export default GroupFriendsList;
