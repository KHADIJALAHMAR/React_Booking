import React, { useState, useEffect } from "react";
import axios from "axios";

function Item (){
    const [Hotels , setHotels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/hotels')
        .then(res => {
            // console.log(res.data);
            setHotels(res.data);
        }).catch (err => {
            console.log(err);
            console.log('makin walo');
        }) 
    })
  return (
    <>
      {Hotels.map((hotel, index) => {
        // let src = "http://localhost:4000/assets/uploads/images/hotel_images/"+ hotel.image_cover;
        return (
          <tr key={index}>
          <td>
          <div className="d-flex px-2 py-1">
                          <div>
                            {/* <img src={src} className="avatar avatar-sm me-3" alt="hotel" /> */}
                              {/* <span className="text-xs font-weight-bold">
                                {hotel.image_cover}
                              </span> */}
                          </div>
                        </div>
          </td>
          <td className="align-middle text-center text-sm">
            {/* <h6 class="mb-0 text-sm"></h6> */}
            <span className="text-xs font-weight-bold">
              {hotel.name}
            </span>
          </td>

          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">{hotel.descreption}</span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {hotel.stars}
            </span>
          
          </td>
          <td className="align-middle text-center">
          <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a>
          <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
          </td>
          
        </tr>
        )
      })}
    </>
  );
};

export default Item;