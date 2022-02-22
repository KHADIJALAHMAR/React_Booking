import React from "react";
import "../src/css/main.css";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
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
