import React, { useState, useEffect } from "react";
import axios from "axios";

const Item = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/customers/`)
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
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img />
              </div>
              <div class="d-flex flex-column justify-content-center">
                {/* <h6 class="mb-0 text-sm"></h6> */}
                <span>{customer.username}</span>
              </div>
            </div>
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
          <td class="align-middle text-center text-sm">
            <span class="text-xs font-weight-bold">{customer.email}</span>
          </td>
          <td class="align-middle">
            <span>{customer.role.name}</span>
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
        </tr>
      ))}
    </>
  );
};

export default Item;
