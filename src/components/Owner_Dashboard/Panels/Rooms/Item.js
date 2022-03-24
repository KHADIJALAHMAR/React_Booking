import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRoomsGroups } from "../../../../services/RoomsService";

function Item({ handleDeleteObject }) {

  const [roomsGroups, setRoomsGroups] = useState([]);

  useEffect(() => {
    (async () => {
      await getRoomsGroups().then(roomsGroup => {
        setRoomsGroups(roomsGroup)
      })
    })()
  }, []);

  if (roomsGroups.status === 200) {
    return (
      <>
        {roomsGroups.data.rooms.map((roomsGroup, index) => {
          return (
            <tr key={index}>
              <td className="align-middle text-center text-sm">
                {<h6 class="mb-0 text-sm"></h6>}
                <span className="text-xs font-weight-bold">{roomsGroup.description}</span>
              </td>
  
              <td className="align-middle text-center text-sm">
                <span className="text-xs font-weight-bold">
                  {roomsGroup.room_quantity}
                </span>
              </td>

              <td className="align-middle text-center">
                <span className="text-xs font-weight-bold">{roomsGroup.price}$</span>
              </td>

              <td className="align-middle text-center text-sm">
                <span className="text-xs font-weight-bold">
                  {roomsGroup.room_quantity}
                </span>
              </td>
              
              <td className="align-middle text-center">
                <a
                  class="btn btn-link text-danger text-gradient px-3 mb-0"
                  href="javascript:;"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteObject("hotel", roomsGroup._id);
                  }}
                >
                  <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
                </a>
                
                <Link
                    class="btn btn-link text-dark px-3 mb-0"
                    to={"/dashboardowner/Room/update/" + roomsGroup._id}
                  >
                    <i
                      class="fas fa-pencil-alt text-dark me-2"
                      aria-hidden="true"
                    ></i>
                    Edit
              </Link>
                
              </td>
            </tr>
          );
        })}
      </>
    );
  }else {
    return (
      <div>Loading...</div>
    )
  }
  
}

export default Item;
