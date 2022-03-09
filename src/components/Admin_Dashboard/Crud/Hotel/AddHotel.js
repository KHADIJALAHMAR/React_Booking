import React, { useState } from "react";
import createhotel from "../../../../services/HotelService";

const AddHotel = () => {
  // creation state initialisation
  const [AddHotel, setAddHotel] = useState({
    name: "",
    descreption: "",
    image_cover: "",
    images: "",
    stars: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setAddHotel({ ...AddHotel, name: e.target.value });
  };
  const handleDescreption = (e) => {
    setAddHotel({ ...AddHotel, descreption: e.target.value });
  };
  const handleImageCover = (e) => {
    console.log("e.target.files[0]", e.target.files[0]);
    setAddHotel({ ...AddHotel, image_cover: e.target.files[0] });
  };
  const handleImages = (e) => {
    console.log("e .target.files", e.target.files);
    setAddHotel({ ...AddHotel, images: e.target.files });
  };
  // console.log(AddHotel);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (AddHotel) {
      console.log('AddHotel : ', AddHotel)
      createhotel(AddHotel).then((response) => {
        console.log(response.data);
      });
      if (AddHotel.status ==200) {
        console.log("Done : ");
        window.location = "/dashboard";
      } else {
        console.log("madaztch");
      }
    }
    setSubmitted(true);
  };

  return (
    <div>
      
      <form
        className="auth_register_form"
        method="POST"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="email-addon"
            value={AddHotel.name}
            onChange={handleName}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Descreption"
            aria-label="Email"
            aria-describedby="email-addon"
            alue={AddHotel.descreption}
            onChange={handleDescreption}
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="image_cover"
            aria-label="Password"
            aria-describedby="password-addon"
            onChange={handleImageCover}
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="image_cover"
            aria-label="Email"
            aria-describedby="password-addon"
            onChange={handleImages}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-control"
            aria-label="Email"
            aria-describedby="email-addon"
            name="star"
            id="star"
            onChange={({target}) =>  setAddHotel({ ...AddHotel, stars: target.value })}
            placeholder="Star"
          >
            <option selected disabled>
              Choose a Stars
            </option>
            <option value="star1">1</option>
            <option value="star2">2</option>
            <option value="star3">3</option>
            <option value="star4">4</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-dark w-100 my-4 mb-2"
          >
            Add Hotel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddHotel;
