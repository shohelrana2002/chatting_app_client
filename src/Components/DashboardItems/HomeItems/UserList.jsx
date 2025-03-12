import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const UserList = () => {
  return (
    <div className="shadow-xl rounded-2xl -mt-24 p-12">
      <DashBoardTitle groupName="User List" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
      <DashBoardLink address="Dhaka" buttonName="+" name="Jov_en" />
    </div>
  );
};

export default UserList;
