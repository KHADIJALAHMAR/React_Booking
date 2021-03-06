import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const Item = ({handleDeleteObject}) => {
  
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/customers/5`)
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {customers.map((customer, index) => (
        <tr key={index}>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">
              {customer.username}
            </span>
          </td>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">{customer.email}</span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {customer.role.name}
            </span>
          </td>
          <td className="align-middle text-center">
            <a
              class="btn btn-link text-danger text-gradient px-3 mb-0"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteObject("user", customer._id);
              }}
              href="javascript:;"
            >
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
            </a>
            <Link class="btn btn-link text-dark px-3 mb-0" to={"/dashboard/user/update/" + customer._id}><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Item;
