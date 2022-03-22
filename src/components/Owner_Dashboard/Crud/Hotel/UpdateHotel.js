import React, { useState, useEffect } from "react";
import { getHotelById, updateHotel } from "../../../../services/HotelService";
import { useParams } from "react-router-dom";
import NavBar from "../../../Shared_Elements/NavBar";

function UpdateHotel() {
  const { HotelId } = useParams();
  const [values, setValues] = useState({
    name: "",
    descreption: "",
    stars: "",
  });

  const [hotel, setHotel] = useState({});
  const [stars, setStars] = useState(1);

  useEffect(() => {
    (async () => {
      await getHotelById(HotelId).then((hotel) => {
        setHotel(hotel);
        setValues({
          ...values,
          name: hotel.data.name,
          descreption: hotel.data.descreption,
        });
        if (hotel.data.stars === 1) {
          setStars(1);
        }
        if (hotel.data.stars === 2) {
          setStars(2);
        }
        if (hotel.data.stars === 3) {
          setStars(3);
        }
        if (hotel.data.stars === 4) {
          setStars(4);
        }
        if (hotel.data.stars === 5) {
          setStars(5);
        }
      });
    })();
  }, []);

  const handleName = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleDescreption = (e) => {
    setValues({ ...values, descreption: e.target.value });
  };

  const handleStars = (e) => {
    setValues({ ...values, stars: e.target.value });
  };

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map((key) => {
      if (values[key] !== "") {
        res[key] = values[key];
      }
    });
    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUpdatedValues(values);
    await updateHotel(HotelId, getUpdatedValues(values));
    window.location = "/dashboardOwner";
    setSubmitted(true);
  };

  return (
    <>
      <NavBar title='Owner Dashboard' dashboard={false} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5>Update Hotel</h5>
              </div>
              <div className="card-body">
                <form
                  role="form text-left"
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
                      name="name"
                      id="name"
                      value={values.name}
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
                      name="descreption"
                      id="descreption"
                      value={values.descreption}
                      onChange={handleDescreption}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      aria-label="Stars"
                      aria-describedby="stars-addon"
                      name="stars"
                      id="stars"
                      placeholder="Stars"
                      onChange={handleStars}
                    >
                      <option selected disabled>
                        Choose a Stars
                      </option>
                      <option value="1" selected={stars === 1 ? true : false}>
                        1
                      </option>
                      <option value="2" selected={stars === 2 ? true : false}>
                        2
                      </option>
                      <option value="3" selected={stars === 3 ? true : false}>
                        3
                      </option>
                      <option value="4" selected={stars === 4 ? true : false}>
                        4
                      </option>
                      <option value="5" selected={stars === 5 ? true : false}>
                        5
                      </option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-dark w-100 my-4 mb-2"
                    >
                      Update Hotel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateHotel;
