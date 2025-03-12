import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const FriendsList = () => {
  return (
    <div className="shadow-xl rounded-2xl  p-12">
      <DashBoardTitle groupName="Friends" />
      <DashBoardLink address="Dhaka" name="Jov_en" buttonName="12,march.2025" />
      <DashBoardLink address="Dhaka" name="Jov_en" buttonName="12,march.2025" />
      <DashBoardLink address="Dhaka" name="Jov_en" buttonName="12,march.2025" />
    </div>
  );
};

export default FriendsList;
