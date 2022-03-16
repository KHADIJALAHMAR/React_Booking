import React from "react";
import ListHotel from "./Hotels/List";
import ListRoom from "./Rooms/List"

const Panel = ({title, handleDeleteObject}) => {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4 mx-auto">
            <div class="card">
               {title === "Hotels" && <ListHotel title={title} handleDeleteObject={handleDeleteObject} />}
               {title === "Rooms" && <ListRoom title={title} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;