import React, { useState, useEffect } from "react";
import axios from "axios";
import GetCustomers from "../../../../services/GetCustomer";

const Item = () => {
  const API_URL = "http://localhost:4000/admin";
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/customers`).then((response) => {
      //   setAPIData(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <tbody>
      {APIData.map((data) => {
        return (
          <tr>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.role.name}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Item;
