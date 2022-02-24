import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { useState } from "react";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel" ;
function App() {

  const [isAdmin , setIsAdmin] = useState(true);{/*remeber to change it to false later*/}

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="auth" element={<Authentication />} >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register/>} />
              <Route path="login/admin/owner/create" element={<AddHotel />} />

          </Route>
          {(isAdmin) && <Route path="dashboard" element={<Dashboard />} />}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
