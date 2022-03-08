import React from "react";
import DropDown from "./DropDown";

export default function Header({title}) {
  return (
    <div>
      <div className="card-header pb-0">
        <div class="row">
          <div class="col-lg-6 col-7">
            <h6>{title}</h6>
          </div>
          <DropDown title={title} />
        </div>
      </div>
    </div>
  );
}
