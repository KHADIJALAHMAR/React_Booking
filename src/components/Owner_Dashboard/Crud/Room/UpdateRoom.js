import React,{ useState ,useEffect} from "react";
import{ getRoomById} from "../../../../services/RoomService"
import{ updateRoom} from "../../../../services/RoomService"
import { useParams } from "react-router";

const UpdateRoom = () => {

    const {roomId} = useParams();
    const [values, setValues] = useState({
      room_quantity: "",
      description: "",
    //   images: "",
      price: ""
    });
    const [room , setRoom] = useState({});
  
  
    useEffect( () => {
      (async () => {
        await getRoomById(roomId).then((room) => {
         setRoom(room)
          setValues({...values, room_quantity: room.data.room_quantity, description: room.data.description, price :room.data.price})
        });
      })();
    }, []);
  
    const [errors, setErrors] = useState({});
  
    const [submitted, setSubmitted] = useState(false);
  
    const [valid, setValid] = useState(false);
  
    const handleRoom_quantity = (e) => {
      setValues({ ...values, room_quantity: e.target.value });
    };
    const handleDescription = (e) => {
      setValues({ ...values, description: e.target.value });
    };
  
    const handleImages = (e) => {
      setValues({ ...values, images: e.target.value });
    };
  
    const handlePrice = (e) => {
      setValues({ ...values, price: e.target.value });
    };
  
    const handleErrors = (errors) => {
      setErrors({ ...errors });
    };
  
    const getUpdatedValues = (values) => {
      let res = {};
      Object.keys(values).map(key => {
        if (values[key] !== room[key]) {
          res[key] = values[key];
        }
      })   
      console.log(res);
      return res;
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await updateRoom(roomId, getUpdatedValues(values))
      window.location = "/dashboardOwner";
      setSubmitted(true);
    };
  
  
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>UpdateRoom</h5>
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
                        aria-describedby="description-addon"
                        name="room_quantity"
                        id="room_quantity"
                        value={values.room_quantity}
                        onChange={handleRoom_quantity}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="description"
                        className="form-control"
                        placeholder="description"
                        aria-label="description"
                        aria-describedby="description-addon"
                        name="description"
                        id="email"
                        value={values.description}
                        onChange={handleDescription}
                      />
                    </div>
                    {/* <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        placeholder="description"
                        aria-label="description"
                        aria-describedby="description-addon"
                        name="image"
                        id="image"
                        value={values.images}
                        onChange={handleImages}
                      />
                    </div> */}
                    
                    <div className="mb-3">
                      <input
                        aria-label="price"
                        aria-describedby="price-addon"
                        name=""
                        id="price"
                        className="form-control text-secondary"
                        onChange={handlePrice}
                        value={values.price}
                      >
                        
                      </input>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                      >
                        UpdateRoom
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
  };
  
  export default UpdateRoom;