import React from "react";
import ListHotel from "./Hotels/List";
import ListOwner from "./Owners/List";
import ListCustomer from "./Customers/List";

const Panel = ({ title ,title_Header }) => {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4 mx-auto">
            <div class="card">
              {title === "Owners" && <ListOwner title ={title}  />}
              {title === "Hotels" && <ListHotel title ={title}  />}
              {title === "Customers" && <ListCustomer title ={title}  />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
