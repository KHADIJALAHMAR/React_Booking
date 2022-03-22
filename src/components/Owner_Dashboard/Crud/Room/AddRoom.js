import React , {useEffect, useState} from 'react'
import { getHotelsByOwner } from '../../../../services/HotelService';
import { getRoomTypes } from '../../../../services/RoomsService';
import { useSelector } from 'react-redux';
import { createRoomGroup } from '../../../../services/RoomsService';
function AddRoom() {

    const [values, setValues] = useState({
        description: "",
        room_quantity: "",
        price: "",
        hotel_id: "",
        room_type_id: "",
        images: "",
    });
    
    const userId = useSelector(state => state.id)

    const [ownerHotels, setOwnerHotels] = useState({});

    const [roomTypes, setRoomTypes] = useState({});

    const [errors, setErrors] = useState({});

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    useEffect(()=> {
      (async () => {
        await getHotelsByOwner(userId).then(hotels => {
          setOwnerHotels(hotels)
        })
        await getRoomTypes().then(room_types => {
          console.log(room_types)
          setRoomTypes(room_types)
        })
      })()
    }, [])
    
    const handleDescription = (e) => {
      setValues({ ...values, description: e.target.value });
    };

    const handleRoomQuantity = (e) => {
      setValues({ ...values, room_quantity: parseInt(e.target.value) });
    };

    const handlePrice = (e) => {
      setValues({ ...values, price: parseInt(e.target.value) });
    };

    const handleHotel = (e) => {
      setValues({ ...values, hotel_id: e.target.value });
    };

    const handleRoomType = (e) => {
      setValues({ ...values, room_type_id: e.target.value });
    };

    const handleImages = (e) => {
      const images = e.target.files.map(file => file.originalName);
      setValues({ ...values, images: images });
    };

    const handleErrors = (errors) => {
      setErrors({ ...errors });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
          values.description &&
          values.room_quantity &&
          values.price &&
          values.hotel_id &&
          values.room_type_id
      ) {
        
        (async () => {
          await createRoomGroup(values);
          window.location = "/owner/dashboard";
        })()

      }

      setSubmitted(true);
    };
if (ownerHotels.status !== 200 || roomTypes.status !== 201) {
  return (<div>Loading...</div>)
}else{
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
                    {
                      ownerHotels.data.map((hotel, index) => {
                        return (
                          <option value={hotel._id}>{hotel.name}</option>
                        )
                      })
                    }
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
                    {
                      roomTypes.data.map((roomType, index) => {
                        return (
                          <option value={roomType._id}>{roomType.name}</option>
                        )
                      })
                    }
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
  
}

export default AddRoom