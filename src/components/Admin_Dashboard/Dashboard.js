import React from 'react'
import Cards from './Cards/Cards'
// import DataFetching from "../../services/HotelService";
import AddHotel from './Crud/Hotel/AddHotel'
function Dashboard() {
  return (
    <div className='admin_dash'>
        <Cards />
          <AddHotel/>  
        {/* <DataFetching/> */}
    </div>
  )
}

export default Dashboard