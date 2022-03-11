import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import DashboardOwner from "./components/Owner_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddUser from "./components/Admin_Dashboard/Crud/User/Add";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel";
import Update from "./components/Admin_Dashboard/Crud/Hotel/Update";

import Addhotels from "./components/Owner_Dashboard/Crud/Hotel/AddHotel";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(false);

  return (
    <React.Fragment>
      <div
        className="vw-100 vh-100 pt-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<div>{role}</div>} />
            <Route
            path="dashboardowner"
            element={
              !authenticated && !role ? <DashboardOwner /> : <Navigate to="/" />
            }
          />
          <Route
            path="dashboard/addUser"
            element={
              !authenticated && !role ? <AddUser /> : <Navigate to="/" />
            }
          />
          <Route
            path="dashboard/create"
            element={
              !authenticated && !role ? <AddHotel /> : <Navigate to="/" />
            }
          />
            <Route
            path="dashboard/update"
            element={
              !authenticated && !role ? <Update /> : <Navigate to="/" />
            }
          />
        </Routes>
        
      </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
