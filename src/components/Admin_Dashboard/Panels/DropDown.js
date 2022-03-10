import React from "react";
import { Link } from "react-router-dom";

export default function DropDown({ title }) {
  return (
    <>
      <div className="col-lg-6 col-5 my-auto text-end">
        <div className="dropdown float-lg-end pe-4">
          <a
            className="cursor-pointer"
            id="dropdownTable"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className="fa fa-ellipsis-v text-secondary"
              aria-hidden="true"
            ></i>
          </a>
          <ul
            className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
            aria-labelledby="dropdownTable"
          >
            <li>
              {title === "Hotels" && (
                <Link
                  className="dropdown-item border-radius-md"
                  to="/dashboard/create"
                >
                  Add {title}
                </Link>
              )}
              {title === "Customers" && (
                <Link
                  className="dropdown-item border-radius-md"
                  to="/dashboard/addUser"
                >
                  Add {title}
                </Link>
              )}
              {title === "Owners" && (
                <Link
                  className="dropdown-item border-radius-md"
                  to="/dashboard/addUser"
                >
                  Add {title}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
