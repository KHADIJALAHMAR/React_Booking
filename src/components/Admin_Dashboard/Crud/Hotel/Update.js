import React, { useState, useEffect } from "react";
import axios from "axios";
// import UpdateHotel from "../../../../services/HotelService";


    function Update (props){
      const APP_URL = "http://localhost:4000/hotels" 

      const [Hotels , setHotels] = useState([]);
      const [data,setData] = useState({
        name : "",
        descreption : "",
        image_cover : "", 
        images :"",
        stars : ""

      })
  
      // useEffect(() => {
      //     axios.get(APP_URL)
      //     .then(res => {
      //         // console.log(res.data);
      //         setHotels(res.data);
      //     }).catch (err =>console.error(err) 
              
      //     ) 
      // },[])

    useEffect(
      ()=>{ 
        const id = props.match.params.id 
        axios.get(APP_URL+id)
        .then(res=>{
          console.log(res.data)
          setData(res.data)
        }).catch(err=>console.error(err))
      },[]
    )

    function submit(e){
      e.preventDefault()
      axios.post(APP_URL,data)
      .then(res=>{
        console.log(res.data)
        const mydata = [...Hotels,res.data]
        Hotels(mydata)
      }).catch(err=>console.error(err))
    }

    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
    }
    
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


    return (
        
       <div>Update form</div>
        
    )
    }


export default Update;
