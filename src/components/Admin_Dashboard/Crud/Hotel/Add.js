import React , { useState}from 'react';

const Add = () => {
    // creation state initialisation  
    const [AddHotel , setAddHotel ] = useState({
        name : "",
        descreption : "",
        image_cover : "", 
        images :"",
        stars : "",
        status : "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handleName = (e) => {
        setAddHotel({ ...AddHotel, name: e.target.value });
    };
    const handleDescreption = (e) => {
        setAddHotel({ ...AddHotel, descreption: e.target.value });
    };
    const handleImage_cover = (e) => {
        setAddHotel({ ...AddHotel, image_cover: e.target.value });
    };
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
            AddHotel.stars,
        
        ).then((response) => {
            console.log(response.data);
        });
        }
        setSubmitted(true);
      };


    return (
        <div className="form-container">
        {/* start register component */}
        <div className="auth_register panel_on">
          <div className="auth_register_right">
            <div className="auth_register_logo">
              <div className="auth_register_icon">
        
            <div className="auth_illustration">
            
            </div>
            <div className="auth_right_bot">
        
            </div>
          </div>
          <div className="auth_register_left">
            <div className="auth_register_left_intro">
              <p>Create an account!</p>
            </div>
            <form
              className="auth_register_form"
              method="POST"
              action=""
              onSubmit={handleSubmit} />
              <div className="auth_form_element">
                <div className="icon_container">
                  <img src={userIcon} alt="" />
                </div>
                <input
                  value={AddHotel.name}
                  onChange={handleName}
                  type="text"
                  name="username"
                  id="name"
                  placeholder="name"
                />
              </div>
              <div className="auth_form_element">
                <div className="icon_container">
                </div>
                <input
                  value={AddHotel.descreption}
                  onChange={handleDescreption}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="descreption"
                />
              </div>
              <div className="auth_form_element">
                <div className="icon_container">
                </div>
                <input
                  value={AddHotel.image_cover}
                  onChange={handleImage_cover}
                  type="text"
                  name="imag_cover"
                  id="password"
                  placeholder="image_cover"
                />
              </div>
              <div className="auth_form_element">
                <div className="icon_container">
               
                </div>
                <input
                  value={AddHotel.images}
                  
                 onChange={handleImages}
                type="text"
                  name="image"
                  id="repeat_password"
                  placeholder="image"
                  />
                
              </div>
              <div className="auth_form_element">
                
                
              </div>
              <div className="auth_form_element">
                
                </div>
                <select name="stars" id="role" onChange={handleStars}>
                  <option selected disabled>
                    Choose a starts
                  </option>
                  <option value="customer">1</option>
                  <option value="owner">2</option>
                  <option value="owner">3</option>
                  <option value="owner">4</option>
                  <option value="owner">5</option>
                </select>
              </div>
              <button type="submit">Create  Hotel</button>
            </form>
          </div>
        </div>
        </div>
    )
    }


export default Add;