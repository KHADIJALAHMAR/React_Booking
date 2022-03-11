import React, { useState, useEffect } from "react";
import axios from "axios";

function Item (){
    const [Owners , setOwners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/admin/owners/')
        .then(res => {
            console.log(res.data);
            setOwners(res.data);
        }).catch (err => {
            console.log(err);
            console.log('olah makhabit 3lik chi haaja makina hta weza');
        }) 
    },[])
  return (
    <>
      
    </>
  );
};

export default Item;