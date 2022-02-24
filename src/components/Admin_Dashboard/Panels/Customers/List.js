import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <Item />
      </table>
    </div>
  );
};

export default List;
