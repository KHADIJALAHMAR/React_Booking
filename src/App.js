import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel" ;
function App() {

  // const [role , setRole] = useState('admin');

  // const handleRole = (role) => {setRole(role)}

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="auth" element={<Authentication />} >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register/>} />

          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/create" element={<AddHotel />} />

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
