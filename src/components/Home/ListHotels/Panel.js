import React from "react";
import List from "./List";

function Panel() {
  return (
    <div>
      <div className="col-md-7 mt-4">
        <div className="card">
          <div className="card-header pb-0 px-3">
            <h6 className="mb-0">Hotels</h6>
          </div>
          <div className="card-body pt-4 p-3">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
