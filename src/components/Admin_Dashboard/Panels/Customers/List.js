import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <div>
      <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Gender</th>
            </tr>
          </thead>
        <Item />
      </table>
    </div>
  );
};

export default List;
