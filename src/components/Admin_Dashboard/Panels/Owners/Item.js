import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Item (handleDeleteObject){
    const [data , setData] = useState([]);

    useEffect(() => {
       getOwners();
    },[]);

    const getOwners = async () => {
      await axios.get("http://localhost:4000/admin/owner/owners")
      .then(result => {
         setData(result.data.owners)
        })
      .catch(error => {
         console.error(error);
           throw error;
         });
    };

      return (
        <>
       {data.map((owner, index) => (
        <tr key={index}>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">
              {owner.username}
            </span>
          </td>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">{owner.email}</span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {owner.role.name}
            </span>
          </td>
          <td className="align-middle text-center">
            <a
              class="btn btn-link text-danger text-gradient px-3 mb-0"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteObject("user", owner._id);
              }}
              href="javascript:;"
            >
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
            </a>
            
            <Link class="btn btn-link text-dark px-3 mb-0" to={"/dashboard/user/update/" + owner._id}><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</Link>
          </td>
        </tr>
      ))}
        </>
      );
    
 
 
};

export default Item;


