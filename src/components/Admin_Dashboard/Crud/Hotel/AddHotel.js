import React, { useState } from "react";
import create_hotel from "../../../../services/HotelService";

const AddHotel = () => {
  // creation state initialisation
  const [AddHotel, setAddHotel] = useState({
    name: "",
    descreption: "",
    image_cover: "",
    images: "",
    stars: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setAddHotel({ ...AddHotel, name: e.target.value });
  };
  const handleDescreption = (e) => {
    setAddHotel({ ...AddHotel, descreption: e.target.value });
  };
  const handleImage_cover = (e) => {
    setAddHotel({ ...AddHotel, image_cover: e.target.value });
  };
  const handleImages = (e) => {
    setAddHotel({ ...AddHotel, images: e.target.value });
  };
  const handleStars = (e) => {
    setAddHotel({ ...AddHotel, stars: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      AddHotel.name &&
      AddHotel.descreption &&
      AddHotel.image_cover &&
      AddHotel.images &&
      AddHotel.stars
    ) {
      create_hotel(
        AddHotel.name,
        AddHotel.descreption,
        AddHotel.image_cover,
        AddHotel.images,
        AddHotel.stars
      ).then((response) => {
        console.log(response.data);
      });
    }
    setSubmitted(true);
  };

  return (
    <form
      className="auth_register_form"
      method="POST"
      action=""
      onSubmit={handleSubmit}
    >
      <div className="auth_form_element">
        <input
          value={AddHotel.name}
          onChange={handleName}
          type="text"
          name="username"
          id="username"
          placeholder="NameHotel"
        />
      </div>
      <div className="auth_form_element">
        <input
          value={AddHotel.descreption}
          onChange={handleDescreption}
          type="text"
          name="text"
          id="text"
          placeholder="descreption Hotel "
        />
      </div>
      <div className="auth_form_element">
        <input
          value={AddHotel.image_cover}
          onChange={handleImage_cover}
          type="text"
          name="image_cover"
          id="image_cover"
          placeholder="image_cover"
        />
      </div>
      <div className="auth_form_element">
        <input
          value={AddHotel.images}
          onChange={handleImages}
          type="text"
          name="image"
          id="repeat_password"
          placeholder="image"
        />
      </div>

      <div className="auth_form_element">
        <select name="star" id="star" onChange={handleStars}>
          <option selected disabled>
            Choose a Stars
          </option>
          <option value="star1">1</option>
          <option value="star2">2</option>
          <option value="star3">3</option>
          <option value="star4">4</option>
        </select>
      </div>
      <button type="submit">Create Hotel</button>
    </form>
  );
};

export default AddHotel;
