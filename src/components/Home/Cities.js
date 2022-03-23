import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHotelByCity } from "../../services/HotelService";
import {setCities} from "../../actions/citiesActions";

function Cities() {
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    city: "",
  });

  const handleCity = (e) => {
    setData({ ...data, city: e.target.value });
  };

  const handleSubmit = (e) => {
    getHotelByCity(data.city).then((response) => {
      (async () => {
        await dispatch(setCities());
      })();
    });
  };

  return (
    <>
      <div>
        <form
          action=""
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-3">
            <select
              aria-label="Gender"
              aria-describedby="gender-addon"
              name="gender"
              id="gender"
              className="form-control text-secondary"
              onChange={handleCity}
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
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default Cities;
