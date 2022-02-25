import React , { useState}from 'react';
import create_hotel from "../../../../services/HotelService";

const AddHotel= () => {
    // creation state initialisation  
    const [AddHotel , setAddHotel ] = useState({
        name : "",
        descreption : "",
        image_cover : "", 
        images :"",
        stars : ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleName = (e) => {
        setAddHotel({ ...AddHotel, name: e.target.value });
    };
    const handleDescreption = (e) => {
        setAddHotel({ ...AddHotel, descreption: e.target.value });
    };
    const handleFileSelect = (e) => {
      setAddHotel({...AddHotel , image_cover: e.target.files[0]})
    }
    const handleImages= (e) => {
        setAddHotel({ ...AddHotel, images: e.target.value });
    };
    const handleStars= (e) => {
        setAddHotel({ ...AddHotel, stars: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (
        AddHotel.name &&
        AddHotel.descreption &&
        AddHotel.image_cover &&
        AddHotel.images &&
        AddHotel.stars 
        ) {
        create_hotel(
            AddHotel.name,
            AddHotel.descreption,
            AddHotel.image_cover,
            AddHotel.images,
            AddHotel.stars
        
        ).then((response) => {
            console.log(response.data);
        })
        }
        setSubmitted(true);
      };
    return (
        <div>
              <form className="auth_register_form" method="POST" action="" onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="email-addon" value={AddHotel.name }  onChange={handleName}/>
                    </div>

                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Descreption" aria-label="Email" aria-describedby="email-addon" alue={AddHotel.descreption } onChange={handleDescreption} />
                  </div>

                  <div className="mb-3">
                    <input type="file" className="form-control" placeholder="image_cover" aria-label="Password" aria-describedby="password-addon"  value={AddHotel.image_cover} onChange={handleFileSelect} />
                  </div>

                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="image_cover" aria-label="Email" aria-describedby="password-addon"  value={AddHotel.images} onChange={handleImages} />
                  </div>  

                  <div className="mb-3">
                  <select  className="form-control"  aria-label="Email"   aria-describedby="email-addon" name="star" id="star" onChange={handleStars} placeholder="Star">
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
                    <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                  </div>
              </form>

        </div>  
    )
    }


export default AddHotel;