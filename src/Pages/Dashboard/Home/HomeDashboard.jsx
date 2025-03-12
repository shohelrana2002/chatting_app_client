import React from "react";
import GroupList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import GroupFriendsList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import FriendsList from "../../../Components/DashboardItems/HomeItems/FriendsList";
import UserList from "../../../Components/DashboardItems/HomeItems/UserList";

const HomeDashboard = () => {
  return (
    <div className="flex justify-around">
      <div>
        <GroupFriendsList />
      </div>
      <div>
        <FriendsList />
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default HomeDashboard;
