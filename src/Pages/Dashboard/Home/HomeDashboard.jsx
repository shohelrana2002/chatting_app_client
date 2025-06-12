import React from "react";
import GroupFriendsList from "../../../Components/DashboardItems/HomeItems/GroupFriendsList";
import FriendsList from "../../../Components/DashboardItems/HomeItems/FriendsList";
import UserList from "../../../Components/DashboardItems/HomeItems/UserList";
import FriendRequest from "../../../Components/DashboardItems/HomeItems/FriendRequest";
import Group from "../../../Components/DashboardItems/HomeItems/Group";
import BlockUsers from "../../../Components/DashboardItems/HomeItems/BlockUsers";
import { Helmet } from "react-helmet";
// import { getAuth } from "firebase/auth";

const HomeDashboard = () => {
  // const auth = getAuth();
  // console.log(auth?.currentUser);
  return (
    <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-x-2">
      <Helmet>
        <title>Chatting Application</title>
      </Helmet>
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
