import React from "react";
import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel";
import AddUser from "./components/Admin_Dashboard/Crud/User/Add";

function App() {
  const [authenticated , setAuthenticated] = useState(false);
  const [role , setRole] = useState(false);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<div>{role}</div>} />
          <Route path="auth" element={authenticated ?  <Navigate to='/' /> : <Authentication />} >
              <Route path="login" element={<Login/>} />
              <Route path="register" element={<Register/>} />
          </Route>
          <Route path="dashboard" element={ !authenticated && !role ? <Dashboard /> : <Navigate to='/' /> } />
          <Route path="dashboard/addUser" element={ !authenticated && !role ? <AddUser /> : <Navigate to='/' /> } />
          <Route path="dashboard/create" element={ !authenticated && !role ? <AddHotel /> : <Navigate to='/' /> } />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
