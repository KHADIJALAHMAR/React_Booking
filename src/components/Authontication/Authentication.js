import React from 'react'
import { Outlet } from 'react-router';
function Authentication() {

  return (
    <div className="auth">
        <Outlet />
    </div>
  )
}

export default Authentication