import React, { useState, useEffect } from "react";
import axios from "axios";

const Item = ({setPopupVisibility,handleDeleteObject}) => {
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
            {/* <h6 class="mb-0 text-sm"></h6> */}
            <span className="text-xs font-weight-bold">
              {customer.username}
            </span>
          </td>
          {/* <td> */}
          {/* <div class="avatar-group mt-2"> */}
          {/* <a
              href="javascript:;"
              class="avatar avatar-xs rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title=""
              data-bs-original-title="Ryan Tompson"
            >
              <img src="../assets/img/team-1.jpg" alt="team1" />
            </a>
            <a
              href="javascript:;"
              class="avatar avatar-xs rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title=""
              data-bs-original-title="Romina Hadid"
            >
              <img src="../assets/img/team-2.jpg" alt="team2" />
            </a>
            <a
              href="javascript:;"
              class="avatar avatar-xs rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title=""
              data-bs-original-title="Alexander Smith"
            >
              <img src="../assets/img/team-3.jpg" alt="team3" />
            </a>
            <a
              href="javascript:;"
              class="avatar avatar-xs rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title=""
              data-bs-original-title="Jessica Doe"
            >
              <img src="../assets/img/team-4.jpg" alt="team4" />
            </a> */}
          {/* </div> */}
          {/* </td> */}
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">{customer.email}</span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {customer.role.name}
            </span>
            {/* <div class="progress-wrapper w-75 mx-auto">
            <div class="progress-info">
              <div class="progress-percentage">
                <span class="text-xs font-weight-bold"></span>
              </div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-gradient-info w-60"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div> */}
          </td>
          <td className="align-middle text-center">
          <a class="btn btn-link text-danger text-gradient px-3 mb-0" 
              onClick={(e) => {
                e.preventDefault();
                handleDeleteObject("user", customer._id);
              }} 
              href="javascript:;">
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
          </a>
          <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Item;
