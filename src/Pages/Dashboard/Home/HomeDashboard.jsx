import React from "react";
import GroupFriendsList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import FriendsList from "../../../Components/DashboardItems/HomeItems/FriendsList";
import UserList from "../../../Components/DashboardItems/HomeItems/UserList";
import FriendRequest from "../../../Components/DashboardItems/HomeItems/FriendRequest";
import Group from "../../../Components/DashboardItems/HomeItems/Group";
import BlockUsers from "../../../Components/DashboardItems/HomeItems/BlockUsers";

const HomeDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-x-2">
      <GroupFriendsList />
      <FriendsList />
      <UserList />
      <FriendRequest />
      <Group />
      <BlockUsers />
    </div>
  );
};

export default HomeDashboard;
