
import React from "react";

function DataFetching (){
    const [posts , setposts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/hotels')
        .then(res => {
            console.log(res)
        }).catch (err => {
            console.log(err);
        }) 
    })
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}> post.title</li>)
                }
            </ul>
        </div>
    )
}


// function FetchHotel(props){
//     const get = (props) => {
//         const { Hotels} = props.dataHotels;
//         if(Hotels.length> 0){
//             return (
//                 Hotels.map((hotel ,index) => {
//                     console.log(hotel) ;
//                     return (
//                         <div className ='hotel' key={hotel.id}>
//                             <h3 className="hotel_title"> {hotel.name}</h3>
//                             <h3 className="hotel_descreption"> {hotel.descreption}</h3>
    
//                         </div>
//                     )
//                 })
//             )
//         }else {
//             return ( <h3> NO notes yet</h3>)
//         }
//     }
   

//     return(
//          <>
//           {get(props)}
//          </>)
//     }
    export default DataFetching;