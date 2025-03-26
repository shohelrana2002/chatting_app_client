import React from "react";
import DashBoardTitle from "../DashBoardItemsSub/DashBoardTitle";
import DashBoardLink from "../DashBoardItemsSub/DashBoardLink";

const FriendRequest = () => {
  return (
    <div className="h-[360px] w-full  p-2 rounded-2xl shadow overflow-y-scroll">
      <DashBoardTitle groupName="Friend Request" />
      <DashBoardLink address="Dhaka" name="Raghav" buttonName="Accept" />
      <DashBoardLink address="Dhaka" name="Raghav" buttonName="Accept" />
      <DashBoardLink address="Dhaka" name="Raghav" buttonName="Accept" />
      <DashBoardLink address="Dhaka" name="Raghav" buttonName="Accept" />
    </div>
  );
};

export default FriendRequest;
