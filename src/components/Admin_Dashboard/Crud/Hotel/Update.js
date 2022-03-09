import React , { useState}from 'react';
import UpdateHotel from "../../../../services/HotelService";

const Updatehotel= () => {
    // creation state initialisation  
    const [Updatehotel , setUpdatehotel ] = useState({
        name : "",
        descreption : "",
        image_cover : "", 
        images :"",
        stars : ""
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleName = (e) => {
        setUpdatehotel({ ...Updatehotel, name: e.target.value });
    };
    const handleDescreption = (e) => {
        setUpdatehotel({ ...Updatehotel, descreption: e.target.value });
    };
    const handleImage_cover = (e) => {
        setUpdatehotel({ ...Updatehotel, image_cover: e.target.value });
    };
    const handleImages= (e) => {
        setUpdatehotel({ ...Updatehotel, images: e.target.value });
    };
    const handleStars= (e) => {
        setUpdatehotel({ ...Updatehotel, stars: e.target.value });
    };


    const handleSubmit = (e) => {
     
        e.preventDefault();
        if (
        Updatehotel.name &&
        Updatehotel.descreption &&
        Updatehotel.image_cover &&
        Updatehotel.images &&
        Updatehotel.stars 
        ) {
        UpdateHotel(
            Updatehotel.name,
            Updatehotel.descreption,
            Updatehotel.image_cover,
            Updatehotel.images,
            Updatehotel.stars
        
        ).then((response) => {
            console.log(response.data);
        })
        }
        setSubmitted(true);
      };


    return (
        
        <form
        className="auth_register_form"
        method="POST"
        action=""
        onSubmit={handleSubmit}
        >
        <div className="auth_form_element">
          <input
            value={Updatehotel.name}
            onChange={handleName}
            type="text"
            name="username"
            id="username"
            placeholder="NameHotel"
          />
        </div>
        <div className="auth_form_element">
          <input
            value={Updatehotel.descreption}
            onChange={handleDescreption}
            type="text"
            name="text"
            id="text"
            placeholder="descreption Hotel "
          />
        </div>
        <div className="auth_form_element">
          <input
            value={Updatehotel.image_cover}
            onChange={handleImage_cover}
            type="text"
            name="image_cover"
            id="image_cover"
            placeholder="image_cover"
          />
        </div>
        <div className="auth_form_element">
          <input
            value={Updatehotel.images}
            onChange={handleImages}
            type="text"
            name="image"
            id="repeat_password"
            placeholder="image"
          />
        </div>
        
        <div className="auth_form_element">
          <select name="star" id="star" onChange={handleStars}>
            <option selected disabled>
              Choose a Stars
            </option>
            <option value="star1">1</option>
            <option value="star2">2</option>
            <option value="star3">3</option>
            <option value="star4">4</option>
          </select>
        </div>
        <button type="submit">Update Hotel</button>
        </form>
        
    )
    }


export default Updatehotel;
