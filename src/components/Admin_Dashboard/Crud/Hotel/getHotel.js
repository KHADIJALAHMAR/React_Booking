
import React from "react";

// function  FetchHotel (){
//      const fileSelectHandel =event => {
//         console.log(event.target.files[0]);
//     }
    
//     {
//         return (
//             <div>
//                 <input type="file" onChange={fileSelectHandel} />
//             </div>
//         )
//     }

// }


function FetchHotel(props){
    const get = (props) => {
        const { Hotels} = props.dataHotels;
        if(Hotels.length> 0){
            return (
                Hotels.map((hotel ,index) => {
                    console.log(hotel) ;
                    return (
                        <div className ='hotel' key={hotel.id}>
                            <h3 className="hotel_title"> {hotel.name}</h3>
                            <h3 className="hotel_descreption"> {hotel.descreption}</h3>
    
                        </div>
                    )
                })
            )
        }else {
            return ( <h3> NO notes yet</h3>)
        }
    }
   

    return(
         <>
          {get(props)}
         </>)
    }
    export default FetchHotel;