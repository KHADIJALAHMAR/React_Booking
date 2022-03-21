import React , {useEffect, useState} from 'react'
function AddRoom() {

    const [values, setValues] = useState({
        description: "",
        room_quantity: "",
        price: "",
        hotel: "",
        room_type: "",
        images: "",
    });
    
    const [errors, setErrors] = useState({});

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    useEffect(()=> {
        
    }, [])
    
    const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
    };

    const handleRoomQuantity = (e) => {
    setValues({ ...values, room_quantity: e.target.value });
    };

    const handlePrice = (e) => {
    setValues({ ...values, price: e.target.value });
    };

    const handleHotel = (e) => {
    setValues({ ...values, hotel: e.target.value });
    };

    const handleRoomType = (e) => {
    setValues({ ...values, room_type: e.target.value });
    };

    const handleImages = (e) => {
    setValues({ ...values, images: e.target.files });
    };

    const handleErrors = (errors) => {
    setErrors({ ...errors });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (
        values.description &&
        values.room_quantity &&
        values.price &&
        values.hotel &&
        values.room_type
    ) {
    //   here create a room
        window.location = "/dashboard";
    }

    setSubmitted(true);
    };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4">
              <h5>Add Room Group</h5>
            </div>
            <div className="card-body">
              <form
                role="form text-left"
                method="POST"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <textarea
                  style={{resize: "none"}}
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    aria-label="Description"
                    name="description"
                    id="room_description"
                    value={values.description}
                    onChange={handleDescription}
                  />
                </div>
                <div className="mb-3">
                    <input
                        type="file"
                        className="form-control"
                        aria-label="Images"
                        multiple
                        onChange={handleImages} 
                    />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Room quantity"
                    aria-label="Room quantity"
                    name="room_qte"
                    id="room_qte"
                    value={values.room_quantity}
                    onChange={handleRoomQuantity}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    aria-label="Price"
                    name="price"
                    id="price"
                    value={values.price}
                    onChange={handlePrice}
                  />
                </div>
                <div className="mb-3">
                  <select
                    aria-label="Hotel"
                    name="hotel"
                    id="hotel"
                    className="form-control text-secondary"
                    onChange={handleHotel}
                  >
                    <option selected disabled>
                      Choose an hotel
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <select
                    aria-label="Room Type"
                    name="room_type"
                    id="room_type"
                    className="form-control text-secondary"
                    onChange={handleRoomType}
                  >
                    <option selected disabled>
                      Choose a room type
                    </option>
                    <option value="customer">Customer</option>
                    <option value="owner">Owner</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bg-gradient-dark w-100 my-4 mb-2"
                  >
                    Add Room Group
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoom