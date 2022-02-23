import axios from "axios";
const APP_URL = "http://localhost:4000/admin";

const Createuser = async (
  username,
  email,
  gender,
  role,
  password,
  repeated_password
) => {
  return await axios
    .post(`${APP_URL}/owner/create`, {
      username,
      email,
      password,
      repeated_password,
      role,
      gender,
    });
};

export default Createuser;
