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
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddUser from "./components/Admin_Dashboard/Crud/User/Add";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel";
import OwnerDashbord from './components/Owner_Dashboard/Dashboard';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(false);

  return (
    <React.Fragment>
      <div className="vw-100 vh-100 pt-4" style={{backgroundColor: "#f8f9fa"}}>
      <Router>
        <Routes>
          <Route path="/" element={<div>{role}</div>} />
          <Route
            path="auth"
            element={authenticated ? <Navigate to="/" /> : <Authentication />}
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="dashboard"
            element={
              !authenticated && !role ? <Dashboard /> : <Navigate to="/" />
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
          <Route path="dashboardOwner" element={<OwnerDashbord />}></Route>

        </Routes>
      </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
