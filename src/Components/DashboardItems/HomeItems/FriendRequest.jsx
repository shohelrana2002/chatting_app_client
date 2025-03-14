import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const FriendRequest = () => {
  return (
    <div className="shadow-xl rounded-2xl px-12">
      <DashBoardTitle groupName="Friend Request" />
      <DashBoardLink address="Dhaka" name="Raghav" buttonName="Accept" />
      <DashBoardLink address="Dhaka" name="Raghav" buttonName="Accept" />
    </div>
  );
};

export default FriendRequest;
