import React from "react";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";

const BlockUsers = () => {
  return (
    <div className="shadow-xl rounded-2xl px-12">
      <DashBoardTitle groupName="Blocked" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
    </div>
  );
};

export default BlockUsers;
