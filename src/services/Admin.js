import React from "react";
import axios from "axios";
const APP_URL = "http://localhost:4000/owner";

// Register costomize API
const addUser = async (
  username,
  email,
  gender,
  role,
  password,
  repeated_password
) => {
  return await axios.post(`${APP_URL}/create`, {
    username,
    email,
    password,
    repeated_password,
    role,
    gender,
  });
};

export default addUser;
