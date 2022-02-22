import React from 'react'
import Login from "../Authontication/Login/Login";
import Register from "../Authontication/Register/Register";

function Authentication() {
  return (
    <div className="auth"> 
        <Login />
        <Register />
    </div>
  )
}

export default Authentication