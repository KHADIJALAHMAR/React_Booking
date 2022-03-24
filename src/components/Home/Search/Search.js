import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHotelByCity } from "../../../services/HotelService";
import { setCities } from "../../../actions/citiesActions";

function Search() {
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
    <div className="search_container d-flex flex-column justify-content-between">
      {/* Title */}
      <div className="title">Search for an Hotel</div>

      {/* Search form */}
      <form
        className="search_form d-flex flex-column"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {/* first group */}
        <div className="first_group d-flex">
          <input type="text" className="px-2" placeholder="Hotel name" />
          <select
            name="gender"
            id="gender"
            className="px-2"
            placeholder="Hotel City"
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
          {/* <input type="text" className="px-2" placeholder="Hotel City" /> */}
          <input type="text" className="px-2" placeholder="stars" />
        </div>

        {/* Price line */}
        <div className="price_line d-flex w-100">
          <p>price</p>
          <hr className="w-100" />
        </div>

        {/* second group */}
        <div className="second_group d-flex">
          <input type="number" className="px-2" placeholder="Price min" />
          <input type="number" className="px-2" placeholder="Price max" />
        </div>
        <button className="main_button_bordered align-self-end">Search</button>
      </form>

      {/* Search button */}
      {/* <button className="main_button_bordered align-self-end">Search</button> */}
    </div>
  );
}

export default Search;
