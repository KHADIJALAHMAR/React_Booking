import React from "react";

export default function DropDown() {
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
              <a className="dropdown-item border-radius-md" href="http://localhost:3000/dashboard/creater">
                Add Hotels
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}