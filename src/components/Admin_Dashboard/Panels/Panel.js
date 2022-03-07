import React from "react";
import List from "./Customers/List";
import Header from "./Customers/Header";

const Panel = () => {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
            <div class="card">
              <Header />
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
