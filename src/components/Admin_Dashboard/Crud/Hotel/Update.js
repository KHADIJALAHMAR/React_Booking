// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import UpdateHotel from "../../../../services/HotelService";


//     function Update (props){
//        const APP_URL = "http://localhost:4000/hotels"
//        const [Hotels , setHotels] = useState([]);
//        const [data,setData] = useState({
//          name : "",
//          descreption : "",
//          image_cover : "", 
//          images :"",
//          stars : ""

//        })
  
    //   // useEffect(() => {
    //   //     axios.get(APP_URL)
    //   //     .then(res => {
    //   //         // console.log(res.data);
    //   //         setHotels(res.data);
    //   //     }).catch (err =>console.error(err) 
              
    //   //     ) 
    //   // },[])

    //  useEffect(
    //    ()=>{ 
    //      const id = props.match.params.id 
    //      axios.get(APP_URL+id)
    //      .then(res=>{
    //        console.log(res.data)
    //        setData(res.data)
    //      }).catch(err=>console.error(err))
    //    },[]
    //  )

    // function submit(e){
    //   e.preventDefault()
    //   axios.post(APP_URL,data)
    //   .then(res=>{
    //     console.log(res.data)
    //     const mydata = [...Hotels,res.data]
    //     Hotels(mydata)
    //   }).catch(err=>console.error(err))
    // }

    // function handle(e){
    //   const newdata={...data}
    //   newdata[e.target.id]=e.target.value
    //   setData(newdata)
    // }
    
    // const [submitted, setSubmitted] = useState(false);

    // const handleName = (e) => {
    //     setUpdatehotel({ ...Updatehotel, name: e.target.value });
    // };
    // const handleDescreption = (e) => {
    //     setUpdatehotel({ ...Updatehotel, descreption: e.target.value });
    // };
    // const handleImage_cover = (e) => {
    //     setUpdatehotel({ ...Updatehotel, image_cover: e.target.value });
    // };
    // const handleImages= (e) => {
    //     setUpdatehotel({ ...Updatehotel, images: e.target.value });
    // };
    // const handleStars= (e) => {
    //     setUpdatehotel({ ...Updatehotel, stars: e.target.value });
    // };


    // const handleSubmit = (e) => {
     
    //     e.preventDefault();
    //     if (
    //     Updatehotel.name &&
    //     Updatehotel.descreption &&
    //     Updatehotel.image_cover &&
    //     Updatehotel.images &&
    //     Updatehotel.stars 
    //     ) {
    //     UpdateHotel(
    //         Updatehotel.name,
    //         Updatehotel.descreption,
    //         Updatehotel.image_cover,
    //         Updatehotel.images,
    //         Updatehotel.stars
        
    //     ).then((response) => {
    //         console.log(response.data);
    //     })
    //     }
    //     setSubmitted(true);
    //   };


//     return (
        
//       <div>
      
//       <form
//         className="auth_register_form"
//         method="POST"
//         action=""
//         // onSubmit={handleSubmit}
//       >
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             aria-label="Name"
//             aria-describedby="email-addon"
//             // value={AddHotel.name}
//             // onChange={handleName}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Descreption"
//             aria-label="Email"
//             aria-describedby="email-addon"
//             // alue={AddHotel.descreption}
//             // onChange={handleDescreption}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="file"
//             className="form-control"
//             placeholder="image_cover"
//             aria-label="Password"
//             aria-describedby="password-addon"
//             // onChange={handleImageCover}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="file"
//             className="form-control"
//             placeholder="images"
//             aria-label="Email"
//             aria-describedby="password-addon"
//             multiple
//             // onChange={handleImages} 
//           />
//         </div>

//         <div className="mb-3">
//           <select
//             className="form-control"
//             aria-label="Email"
//             aria-describedby="email-addon"
//             name="star"
//             id="star"
//             // onChange={({target}) =>  setAddHotel({ ...AddHotel, stars: target.value })}
//             placeholder="Star"
//           >
//             <option selected disabled>
//               Choose a Stars
//             </option>
//             <option value="star1">1</option>
//             <option value="star2">2</option>
//             <option value="star3">3</option>
//             <option value="star4">4</option>
//           </select>
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="btn bg-gradient-dark w-100 my-4 mb-2"
//           >
//             Add Hotel
//           </button>
//         </div>
//       </form>
//     </div>
        
//     )
//     }


// export default Update;


import React, { useEffect, useState } from "react";
import { getHotelById, updateHotel } from "../../../../services/HotelService";
import { useParams } from "react-router-dom";
const UpdateUser = () => {

  const {id} = useParams();
  const [values, setValues] = useState({
    name: "",
    descreption: "",
    image_cover: "",
    images: "",
    stars: ""
  });

  const [hotel , setHotel] = useState({});
  const [name , setName] = useState({});
  const [image_cover , steImage_cover] = useState({});
  const [images , setImages] = useState({});
  const [stars , setStars] = useState({});


  useEffect( () => {
    
       getHotelById(id).then((hotel) => {
        setHotel(hotel)
        setValues({...values, name: hotel.data.name, descreption: hotel.data.descreption, image_cover: hotel.data.image_cover, images: hotel.data.images, images: hotel.data.images })
      });
 
  }, []);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleName = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  const handleDescreption = (e) => {
    setValues({ ...values, descreption: e.target.value });
  };
  const handleImageCover = (e) => {
    setValues({ ...values, image_cover: e.target.value });
  };

  const handleImages = (e) => {
    setValues({ ...values, images: e.target.value });
  };

  const handleStars = (e) => {
    setValues({ ...values, stars: e.target.value });
  };

  const handleErrors = (errors) => {
    setErrors({ ...errors });
  };

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map(key => {
      if (values[key] !== "") {
        res[key] = values[key];
      }
    })
    return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUpdatedValues(values);
    await updateHotel(id, getUpdatedValues(values))
    window.location = "/dashboard";
    setSubmitted(true);
  };

  // if (user.status !== 200) {
  //   return (<div>loading...</div>)
  // }else {
    return (
      <div>
      
      <form
        className="auth_register_form"
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
            value={values.name}
            onChange={handleName}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Descreption"
            aria-label="Email"
            aria-describedby="email-addon"
            alue={values.descreption}
            onChange={handleDescreption}
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="image_cover"
            aria-label="Password"
            aria-describedby="password-addon"
            onChange={handleImageCover}
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="images"
            aria-label="Email"
            aria-describedby="password-addon"
            multiple
            onChange={handleImages} 
          />
        </div>

        <div className="mb-3">
          <select
            className="form-control"
            aria-label="Email"
            aria-describedby="email-addon"
            name="star"
            id="star"
            onChange={({target}) =>  setValues({ ...values, stars: target.value })}
            placeholder="Star"
          >
            <option selected disabled>
              Choose a Stars
            </option>
            <option value="star1">1</option>
            <option value="star2">2</option>
            <option value="star3">3</option>
            <option value="star4">4</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-dark w-100 my-4 mb-2"
          >
            Update Hotel
          </button>
        </div>
      </form>
    </div>
    );
  
};

export default UpdateUser;
