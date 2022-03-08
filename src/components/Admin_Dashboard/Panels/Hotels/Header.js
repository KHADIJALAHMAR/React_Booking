import React from "react";
import DropDown from "./DropDown";

export default function Header() {
  return (
    <div>
      <div className="card-header pb-0">
        <div class="row">
          <div class="col-lg-6 col-7">
            <h6>Hotels</h6>
          </div>
          <DropDown />
        </div>
      </div>
    </div>
  );
}