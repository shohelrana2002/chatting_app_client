import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const Group = () => {
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle groupName="Group" />
      <DashBoardLink address="Dhaka " buttonName="Today" name="Raghav" />
      <DashBoardLink address="Dhaka " buttonName="Today" name="Raghav" />
    </div>
  );
};

export default Group;
