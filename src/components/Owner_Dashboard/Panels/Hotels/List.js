import React from "react";
import Item from "./Item";
import Header from "../Header";

const List = () => {
  return (
    <div>
      {/* <Header title ={title} /> */}
      <div className="card-body px-0 pb-2">
        <div className="table-responsive">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                  Hotel image
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                  Hotel name
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Hotel description
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Hotel stars
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