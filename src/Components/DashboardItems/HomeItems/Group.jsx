import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const Group = () => {
  return (
    <div className="shadow-xl rounded-2xl px-12">
      <DashBoardTitle groupName="Group" />
      <DashBoardLink address="Dhaka " buttonName="Today" name="Raghav" />
      <DashBoardLink address="Dhaka " buttonName="Today" name="Raghav" />
    </div>
  );
};

export default Group;
