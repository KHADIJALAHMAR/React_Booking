import axios from "axios";
const API_URL = "http://localhost:3000/admin";

const getCustomers = () => {
  return axios
    .get(`${API_URL}/customers`)
    .then((res) => {
      const customers = res.data;
    })
    .catch((err) => console.log(`Error: ${err}`));
};

export default getCustomers;
