import React from 'react'
import { Outlet } from 'react-router';
import Login from "../Authontication/Login/Login";
import Register from "../Authontication/Register/Register";
function Authentication({panel}) {

  return (
    <div className="auth"> 
        <Outlet />
    </div>
  )
}

export default Authentication