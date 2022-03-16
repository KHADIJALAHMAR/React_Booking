import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Item (){
    const [data , setData] = useState([]);

    useEffect(() => {
       getOwners();
    },[]);

    const getOwners = async () => {
    const  res =  await axios.get("http://localhost:4000/admin/owners")
      if(res.status === 200) {
        setData(res.data);
      }
    };
    console.log("data :",data);
 
  return (
    <>
       { data && data.map((items, index) => {
        return (
          <tr key={index}>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">
              {items.username}
            </span>
          </td>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">{items.email}</span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.role.name}
            </span>
          </td>
          <td className="align-middle text-center">
            <a
              class="btn btn-link text-danger text-gradient px-3 mb-0"
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleDeleteObject("user", items._id);
              // }}
              href="javascript:;"
            >
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
            </a>
            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
              <i
                class="fas fa-pencil-alt text-dark me-2"
                aria-hidden="true"
              ></i>
              Edit
            </a>
            <Link class="btn btn-link text-dark px-3 mb-0" to={"/dashboard/user/update/" + items._id}><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</Link>
          </td>
        </tr>
        )
        })} 
    </>
  );
};

export default Item;