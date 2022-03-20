import React from "react";
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../src/css/main.css";
import Dashboard from "./components/Admin_Dashboard/Dashboard";
import Authentication from "./components/Authontication/Authentication";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddUser from "./components/Admin_Dashboard/Crud/User/Add";
import AddHotel from "./components/Admin_Dashboard/Crud/Hotel/AddHotel";
import UpdateUser from "./components/Admin_Dashboard/Crud/User/Update";
import AdminUpdateHotel from "./components/Admin_Dashboard/Crud/Hotel/Update";
import OwnerAddHotels from "./components/Owner_Dashboard/Crud/Hotel/AddHotel";
import Home from "./components/Home";
import DashboardOwner from "./components/Owner_Dashboard/Dashboard";
import UpdateHotel from "./components/Owner_Dashboard/Crud/Hotel/UpdateHotel"
import AddRoom from "./components/Owner_Dashboard/Crud/Room/AddRoom";


function App() {

  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role);
  
  return (
      <React.Fragment>
        <div className="vw-100 vh-100 pt-4" style={{backgroundColor: "#f8f9fa"}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="auth"
              element={!authenticated ?   <Authentication /> : <Navigate to="/" />}
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              path="dashboard"
              element={
                authenticated && role === 'admin' ? <Dashboard /> : <Navigate to="/" />
              }
            />
            <Route
              path="owner/dashboard"
              element={
                !authenticated && !role ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="dashboardowner"
              element={
                authenticated && role === 'owner' ? <DashboardOwner /> : <Navigate to="/" />
              }
            />
            <Route
              path="dashboard/addUser"
              element={
                authenticated && role === 'admin' ? <AddUser /> : <Navigate to="/" />
              }
            />
            <Route
              path="dashboard/create"
              element={
                authenticated && role === 'admin' ? <AddHotel /> : <Navigate to="/" />
              }
            />
             <Route
            path="owner/dashboard/createHotel"
            element={
              authenticated && role === 'owner' ? <OwnerAddHotels /> : <Navigate to="/" />
            }
            />
            <Route
              path="dashboard/user/update/:id"
              element={
                authenticated && role === 'admin' ? <UpdateUser /> : <Navigate to="/" />
              }
              />
            <Route
              path="dashboard/update"
              element={
                authenticated && role === 'admin' ? <AdminUpdateHotel /> : <Navigate to="/" /> } 
            />
            <Route
              path="dashboardowner/hotel/update/:HotelId"
              element={
                authenticated && role === 'owner' ? <UpdateHotel /> : <Navigate to="/" />
              }
            />
            <Route path="owner/dashboard/addRoom" element={authenticated && role === 'owner' ? <AddRoom /> : <Navigate to="/" />} />
          </Routes>
        </Router>
        </div>
      </React.Fragment>
  );
}

export default App;
