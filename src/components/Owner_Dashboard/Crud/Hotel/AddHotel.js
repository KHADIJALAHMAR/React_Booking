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
//         window.location = "/dashboard";
//       } else {
//         console.log("madaztch");
//       }
//     }
//     setSubmitted(true);
//   };

//   return (
//     <div>
      
//       <form
//         className="auth_register_form"
//         method="POST"
//         action=""
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             aria-label="Name"
//             aria-describedby="email-addon"
//             value={Add.name}
//             onChange={handleName}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Descreption"
//             aria-label="Email"
//             aria-describedby="email-addon"
//             alue={Add.descreption}
//             onChange={handleDescreption}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="file"
//             className="form-control"
//             placeholder="image_cover"
//             aria-label="Password"
//             aria-describedby="password-addon"
//             onChange={handleImageCover}
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
//             onChange={handleImages} 
//           />
//         </div>

//         <div className="mb-3">
//           <select
//             className="form-control"
//             aria-label="Email"
//             aria-describedby="email-addon"
//             name="star"
//             id="star"
//             onChange={({target}) =>  setAdd({ ...Add, stars: target.value })}
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
//   );
// };
// export default Add;

import React from 'react'

function Add() {
  return (
    <div>
      <h1>AD HOTEL</h1>
    </div>
  )
}

export default Add
