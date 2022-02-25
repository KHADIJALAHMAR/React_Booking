import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <div>
      <div className="card-body px-0 pb-2">
        <div className="table-responsive">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Companies
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Members
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Budget
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Completion
                </th>
              </tr>
            </thead>
            <tbody>
              <Item />
              <Item />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
