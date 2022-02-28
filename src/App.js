import React from "react";
import { BrowserRouter , Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
import jwt from 'jwt-decode';
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel" ;
function App() {

  const [authenticated , setAuthenticated] = useState(jwt(window.localStorage.getItem('token')));
  const [role , setRole] = useState(jwt(window.localStorage.getItem('token')).role.name);
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>{role}</div>} />
          <Route path="auth" element={authenticated ?  <Navigate to='/' /> : <Authentication />} >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register/>} />
              <Route path="login/admin/owner/create" element={<AddHotel />} />
          </Route>
          <Route path="dashboard" element={ authenticated && role === 'admin' ? <Dashboard /> : <Navigate to='/' /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
