import axios from "axios";
const APP_URL = "http://localhost:4000/auth";
/*
    You need to add hire axios config for send Token in header with any request.
*/

export function login(email, password) {
  return axios.post(`${APP_URL}/login`, {
    email: email,
    password: password,
  });
}

// Register costomize API
const register = async (
  username,
  email,
  gender,
  role,
  password,
  repeated_password
) => {
  return await axios.post(`${APP_URL}/register`, {
    username,
    email,
    password,
    repeated_password,
    role,
    gender,
  });
};

export default register;
