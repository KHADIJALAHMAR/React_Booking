import React, { useState, useEffect } from "react";
import axios from "axios";

function Item (){
    const [Hotels , setHotels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/hotels')
        .then(res => {
            console.log(res)
        }).catch (err => {
            console.log(err);
        }) 
    })
  return (
    <>
      {Hotels.map((hotel, index) => (
        <tr key={index}>
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
              {hotel.star}
            </span>
          
          </td>
          
        </tr>
      ))}
    </>
  );
};

export default Item;