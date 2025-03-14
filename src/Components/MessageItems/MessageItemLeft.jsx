import React from "react";
import MessageItemSearchBar from "./MessageItemSearchBar";
import Group from "../DashboardItems/HomeItems/Group";
import FriendsList from "../DashboardItems/HomeItems/FriendsList";

const MessageItemLeft = () => {
  return (
    <div>
      <MessageItemSearchBar />
      <Group />
      <FriendsList />
    </div>
  );
};

export default MessageItemLeft;
