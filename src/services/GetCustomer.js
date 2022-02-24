import axios from "axios";
const API_URL = "http://localhost:3000/admin";

const getCustomer = () => {
  return axios.get(`${API_URL}/customers`).then((response) => {
    console.log(response.data);
  });
};

export default getCustomer;
