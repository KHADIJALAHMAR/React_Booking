import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:3000/admin";

const [customer, setCustomer] = useState([]);

const getCustomer = () => {
  return axios.get(`${API_URL}/customers`).then((response) => {
    console.log(response.data);
  });
};

useEffect(() => getCustomer);

export default getCustomer;
