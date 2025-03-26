import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const UserList = () => {
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle groupName="User List" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
    </div>
  );
};

export default UserList;
