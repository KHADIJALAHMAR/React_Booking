import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:4000/hotels`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
       
            const filteredData = APIData.filter((hotel) => {
                return Object.values(hotel).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
     
    }

    return (
            <>
     <input icon='search'
                 placeholder='Search...'
                 onChange={(e) => searchItems(e.target.value) }
             />
     <ul className="list-group">
       {filteredResults.map((hotel) => (
         <li
           
           className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
         >
           <div className="d-flex flex-column">
             <h6 className="mb-3 text-sm">{hotel.name} Hotel</h6>
             <span className="mb-2 text-xs">
               Description:{" "}
               <span className="text-dark font-weight-bold ms-sm-2">
                 {hotel.descreption}
               </span>
             </span>
             <span className="mb-2 text-xs">
               Stars:{" "}
               <span className="text-dark ms-sm-2 font-weight-bold">
                 {hotel.stars}
               </span>
             </span>
           </div>
         </li>
       ))}
     </ul>
   </>
   )
  }