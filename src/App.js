import React from "react";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import AddUser from "./components/User/AddUser";

function App() {
  return (
    <div className="app">
      <Authentication />
      <Dashboard />
      <AddUser />
    </div>
  );
}

export default App;
