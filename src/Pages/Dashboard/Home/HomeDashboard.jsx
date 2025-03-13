import React from "react";
import GroupFriendsList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import FriendsList from "../../../Components/DashboardItems/HomeItems/FriendsList";
import UserList from "../../../Components/DashboardItems/HomeItems/UserList";

const HomeDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-12">
      <GroupFriendsList />
      <div className="flex -mt-12 justify-center gap-x-4 md:flex-row flex-col mx-auto md:justify-around">
        <FriendsList />
        <UserList />
      </div>
    </div>
  );
};

export default HomeDashboard;
