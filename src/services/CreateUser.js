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
  try {
    const response = await axios.post(`${APP_URL}/owner/create`, {
      username,
      email,
      gender,
      role,
      password,
      repeated_password,
    });
    return response.data;
  } catch (error) {
    return console.log({ error });
  }
};

export default Createuser;
