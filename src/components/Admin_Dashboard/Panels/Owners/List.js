import React from "react";
import Item from "./Item";
import Header from "./Header";

const List = () => {
  return (
    <div>
      <Header />
      <div className="card-body px-0 pb-2">
        <div className="table-responsive">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                  Owner name
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Owner email
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Gender
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Role
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <Item />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;