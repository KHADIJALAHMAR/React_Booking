import React from "react";
import Cards from "./Cards/Cards";
import Panel from "./Panels/Panel";

function Dashboard() {
  return (
    <div className="admin_dash">
      <Cards />
      <div className="panel">
        <Panel />
      </div>
    </div>
  );
}

export default Dashboard;
