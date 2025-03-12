import React from "react";
import GroupList from "../../../Components/DashboardItems/HomeItems/GroupList";

const HomeDashboard = () => {
  return (
    <div className="grid grid-cols-2">
      <GroupList />
    </div>
  );
};

export default HomeDashboard;
