import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Cities() {
  const cities = useSelector((state) => state.cities);
  return (
    <>
      <div>
        <div className="mb-3">
          <select
            aria-label="Gender"
            aria-describedby="gender-addon"
            name="gender"
            id="gender"
            className="form-control text-secondary"
            // onChange={handleGender}
          >
            <option selected disabled>
              Choose a city
            </option>
            {cities &&
              cities.length > 0 &&
              cities.map((item) => (
                <option value={item.city}>{item.city}</option>
              ))}
          </select>
        </div>
        {/* {data && data.length > 0 && data.map((item) => <p>{item.city}</p>)} */}
      </div>
    </>
  );
}

export default Cities;
