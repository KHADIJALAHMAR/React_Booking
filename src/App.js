import React from "react";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
function App() {
  return (
    <div className="app">
      <Authentication />
      <Dashboard />
    </div>
        
  );
}

export default App;
