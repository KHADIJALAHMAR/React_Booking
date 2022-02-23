import axios from "axios";
const APP_URL = "http://localhost:4000/admin";

const Createuser = (
  username,
  email,
  gender,
  role,
  password,
  repeated_password
) => {
  return axios
    .post(`${APP_URL}/owner/create`, {
      username,
      email,
      gender,
      role,
      password,
      repeated_password,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log({ error }));
};

export default Createuser;
