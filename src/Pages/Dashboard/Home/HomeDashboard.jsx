import React from "react";
import GroupList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import GroupFriendsList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import FriendsList from "../../../Components/DashboardItems/HomeItems/FriendsList";
import UserList from "../../../Components/DashboardItems/HomeItems/UserList";

const HomeDashboard = () => {
  return (
    <div className="flex gap-x-4 md:flex-row flex-col justify-around">
      <GroupFriendsList />
      <FriendsList />
      <UserList />
    </div>
  );
};

export default HomeDashboard;
