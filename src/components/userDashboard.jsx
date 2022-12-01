import React from "react";
import DashboardMain from "./dashboardMain";

const UserDashboard = () => {
  return (
    <div className="dashboard-container container">
      <div className="dashboard-menu row">
        <button className="dashboard-option col">Profile</button>
        <button className="dashboard-option col">Favorite movies</button>
      </div>
    </div>
  );
};

export default UserDashboard;
