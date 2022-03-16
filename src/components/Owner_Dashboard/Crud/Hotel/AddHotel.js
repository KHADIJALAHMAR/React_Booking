// import React, { useState } from "react";
// import createhotel from "../../../../services/HotelService";

// const Add = () => {
//   // creation state initialisation
//   const [Add, setAdd] = useState({
//     name: "",
//     descreption: "",
//     image_cover: "",
//     images: "",
//     stars: ""
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleName = (e) => {
//     setAdd({ ...Add, name: e.target.value });
//   };
//   const handleDescreption = (e) => {
//     setAdd({ ...Add, descreption: e.target.value });
//   };
//   const handleImageCover = (e) => {
//     console.log("e.target.files[0]", e.target.files[0]);
//     setAdd({ ...Add, image_cover: e.target.files[0] });
//   };
//   const handleImages = (e) => {
//     console.log("e .target.files", e.target.files);
//     setAdd({ ...Add, images: e.target.files });
//   };
//   const handleStars = (e) => {
//     setAdd({ ...Add, stars: e.target.value });
//   };
//   // console.log(Add);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (Add) {
//       console.log('Add : ', Add)
//       createhotel(Add).then((response) => {
//         console.log(response.data);
//       });
//       if (Add.status ==200) {
//         console.log("Done : ");
//         window.location = "/dashboardowner";
//       } else {
//         console.log("madaztch");
//       }
//     }
//     setSubmitted(true);
//   };

//   return (
//      <div className="container mt-5">
//       <div className="row">
//         <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
//           <div className="card z-index-0">
//             <div className="card-header text-center pt-4">
//               <h5>Add Hotel</h5>
//             </div>
//             <div className="card-body">
//               <form
//                 role="form text-left"
//                 method="POST"
//                 action=""
//                 onSubmit={handleSubmit}
//               >
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Name"
//                     aria-label="Name"
//                     aria-describedby="email-addon"
//                     name="name"
//                     id="name"
//                     value={Add.name}
//                     onChange={handleName}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Descreption"
//                     aria-label="Email"
//                     aria-describedby="email-addon"
//                     name="descreption"
//                     id="descreption"
//                     value={Add.descreption}
//                     onChange={handleDescreption}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <select
//                     className="form-control"
//                     aria-label="Stars"
//                     aria-describedby="stars-addon"
//                     name="stars"
//                     id="stars"
//                     placeholder="Stars"
//                     value={Add.stars}
//                     onChange={handleStars}
                   
//                   >
//                     <option selected disabled>
//                       Choose a Stars
//                     </option>
//                     <option value="1">
//                       1
//                     </option>
//                     <option value="2">
//                       2
//                     </option>
//                     <option value="3">
//                       3
//                     </option>
//                     <option value="4">
//                       4
//                     </option>
//                     <option value="5">
//                       5
//                     </option>
//                   </select>
//                 </div>
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     className="btn bg-gradient-dark w-100 my-4 mb-2"
//                   >
//                     Add Hotel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Add;

// // import React from 'react'

// // function Add() {
// //   return (
// //     <div>
// //       <h1>AD HOTEL</h1>
// //     </div>
// //   )
// // }

// // // export default Add


// import React, { useState } from "react";

 
// function CreateUser() {
  
//    const handleSubmit = event => {
//      event.preventDefault();
//      var data = {
//       "name" :name,
//         "descreption":descreption,
//         "image_cover":image_cover,
//         "images":images,
//         "stars":stars
//      }
 
//      fetch('http://localhost:4000/hotels', {
//        method: 'POST',
//        headers: {
//          Accept: 'application/form-data',
//          'Content-Type': 'application/json',
//        },
//        body: JSON.stringify(data),
//      })
//      .then(res => res.json())
//      .then(
//        (result) => {
//          alert(result['message'])
//          if (result['status'] === 'ok') {
//            window.location.href = '/dashboardowner';
//          }
//        }
//      )
//    }
//   const [name, setName] = useState('');
//   const [descreption, setDescreption] = useState('');
//   const [image_cover, setImage_cober] = useState('');
//   const [images, setImages] = useState('');
//   const [stars, setStars] = useState('');
 
//    return (
//        <form class="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
//        <div class="flex flex-wrap mx-3 mb-2">
//            <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
//            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//                First Name
//            </label>
//            <input
//            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//            type="text"
//            placeholder="First Name"
//            onChange={(e) => setName(e.target.value)}
//            label="First Name"
//            />
              
          
//            </div>
//            <div class="w-full md:w-1/2 px-3">
//            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//            for="grid-last-name">
//                Last Name
//            </label>
//            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
//            type="text" placeholder="Last Name"
//            onChange={(e) => setDescreption(e.target.value)}
//            label="Last Name"
//            />
//            </div>
//        </div>
//        <div class="flex flex-wrap mx-3 mb-2">
//            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//                    Email Address
//                </label>
//                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                type="email"  placeholder="Email address"
//                onChange={(e) => setImage_cober(e.target.value)}
//                label="Email"
//                />
//            </div>
//            <div class="w-full md:w-1/2 px-3">
//            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//                Username
//            </label>
//            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
//            label="Username"
//            onChange={(e) => setImages(e.target.value)}
//            type="text" placeholder="janeDoe"
//            />
//            </div>
//        </div>
//        <div class="flex flex-wrap mx-3 mb-1">
//            <div class="w-full px-3">
//            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-image">
//                Avatar
//            </label>
//            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text"
//            placeholder="Image link"
//            label="Avatar"
//            onChange={(e) => setStars(e.target.value)}
//            />
//            </div>
//        </div>
//        <button type="submit" class="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//            SUBMIT
//        </button>
      
//        </form>
//    )
// }
 
// export default CreateUser;

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
    navigate("/dashboardowner")
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



