import React from "react";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";

const BlockUsers = () => {
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle groupName="Blocked" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
      <DashBoardLink address="Dhaka" buttonName="unblock" name="Raghav" />
    </div>
  );
};

export default BlockUsers;
