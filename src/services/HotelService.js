import { useEffect ,useState } from "react";
import axios from "axios";
// import FetchHotel from "../components/Admin_Dashboard/Crud/Hotel/getHotel";
const APP_URL = "http://localhost:4000/hotels";
// const API_URL = "https://jsonplaceholder.typicode.com/posts";



// function DataFetching (){
//     const [posts , setposts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:4000/hotels')
//         .then(res => {
//             console.log(res)
//         }).catch (err => {
//             console.log(err);
//         }) 
//     })
//     return (
//         <div>
//             <ul>
//                 {
//                     posts.map(post => <li key={post.id}> post.title</li>)
//                 }
//             </ul>
//         </div>
//     )
// }

// function Parent (){
//     const [Hotels, setHotels] = useState(''); 
//     useEffect(() => { 
//         getHotels()
//         ;}, []);


//     const getHotels = () => {
//         axios.get(`${APP_URL}`)
//         .then((response) => {
//             const dataHotels= response.data;
//             setHotels (dataHotels);
//         }).catch(error => console.error(`Error hahahahah : ${error}`));
//     }

//     return(
//         <FetchHotel dataHotels ={Hotels} />
        
//     )
// }

const  create_hotel = async(
    name,
    descreption,
     // image_cover, 
    // images,
    stars
)=> {
   try {
       const response = await axios.post(`${APP_URL}`, {
        name,
        descreption,
         // image_cover, 
        // images,
        stars
       });
       return console.log(response.data);
   } catch (error) {
       return console.log(error);
   }
}; 


export default create_hotel;







