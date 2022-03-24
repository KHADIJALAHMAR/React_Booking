import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import Home from "./components/Home/Home";
import DashboardOwner from "./components/Owner_Dashboard/Dashboard";
import UpdateHotel from "./components/Owner_Dashboard/Crud/Hotel/UpdateHotel"
import UpdateRoom from "./components/Owner_Dashboard/Crud/Room/UpdateRoom";
import ProfilOwner from "./components/Owner_Dashboard/Owner_Profile/Profile"
import AddRoom from "./components/Owner_Dashboard/Crud/Room/AddRoom";
import SideBar from "./components/Shared_Elements/SideBar";
import { setCities } from "./actions/citiesActions";

function App() {
  const authenticated = useSelector((state) => state.authenticated);
  const role = useSelector((state) => state.role);
  const cities = useSelector((state) => state.cities);

  const dispatch = useDispatch();
  // -------------------------------------------------------
  const getData = () => {
    try {
      fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          dispatch(setCities(myJson));
        });
    } catch (error) {
      console.log("ERROR MESSAGE:" + error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
      <React.Fragment>
        <div className="vw-100 h-100 pt-4" style={{backgroundColor: "#f8f9fa"}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="auth"
              element={
                !authenticated ? <Authentication /> : <Navigate to="/" />
              }
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              path="dashboard"
              element={
                authenticated && role === "admin" ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="owner/dashboard"
              element={
                authenticated && role === "owner" ? (
                  <DashboardOwner />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="dashboard/addUser"
              element={
                authenticated && role === "admin" ? (
                  <AddUser />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="dashboard/create"
              element={
                authenticated && role === "admin" ? (
                  <AddHotel />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              // path="dashboardowner/createHotel"
              path="owner/dashboard/createHotel"
              element={
                authenticated && role === "owner" ? (
                  <OwnerAddHotels />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="dashboard/user/update/:id"
              element={
                authenticated && role === "admin" ? (
                  <UpdateUser />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="dashboard/update"
              element={
                authenticated && role === "admin" ? (
                  <AdminUpdateHotel />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="owner/dashboard/hotel/update/:HotelId"
              element={
                authenticated && role === "owner" ? (
                  <UpdateHotel />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="owner/dashboard/addRoom"
              element={
                authenticated && role === "owner" ? (
                  <AddRoom />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/dashboardowner/updateHotel" element={!authenticated && !role ? <UpdateHotel /> : <Navigate to="/" />} />
            <Route path="/dashboardowner/Room/update/:roomId" element={!authenticated && !role ? <UpdateRoom /> : <Navigate to="/" />} />
            <Route path="owner/dashboard/addRoom" element={authenticated && role === 'owner' ? <AddRoom /> : <Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
