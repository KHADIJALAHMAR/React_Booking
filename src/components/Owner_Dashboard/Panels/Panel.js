import React from "react";
import ListHotel from "./Hotels/List";

const Panel = ({title, handleDeleteObject}) => {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4 mx-auto">
            <div class="card">
               <ListHotel title={title} handleDeleteObject={handleDeleteObject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;