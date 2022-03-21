

import React,{useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
// import { Toast } from "bootstrap";

const inizialState = {
  name: "",
  descreption:"",
  stars:"",

}
const Addhotel = () => {
  const [state, setState] = useState(inizialState);

  const {name, descreption, stars } = state

  const  navigate = useNavigate()
  const Addhotel = async (data) => {
    const res = await axios.post("http://localhost:4000/hotels",data);
    if(res.status === 200){
      alert(['dazt'])
    }else{
      console.log("makin walo ");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !descreption || !stars){
      alert(['field the inputs'])
    }else{
      Addhotel(state);
    navigate("/owner/dashboard")
    }
    
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
  };
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
        <div className="card z-index-0">
          <div className="card-header text-center pt-4">
            <h5>Add Hotel</h5>
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
                  value={name}
                  onChange={handleInputChange}
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
                  value={descreption}
                  onChange={handleInputChange}
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
                  value={stars}
                  onChange={handleInputChange}
              
                >
                  <option selected disabled>
                    Choose a Stars
                  </option>
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                  <option value="3">
                    3
                  </option>
                  <option value="4">
                    4
                  </option>
                  <option value="5">
                    5
                  </option>
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
        </div>
      </div>
    </div>
  </div>
  );
}

export default Addhotel;



