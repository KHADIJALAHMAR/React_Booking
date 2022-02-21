import React from "react";
import "../src/css/AppLogin.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="app">
        <Login />
        <div className="auth"> 
            <Register />
        </div>
    </div>
  );
}

export default App;
