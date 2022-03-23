import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import Body from './Body'
import NavBar from '../Shared_Elements/NavBar'
import HeroHeader from './HeroHeader/HeroHeader'
import Search from './Search/Search'
import List from './HotelList/List'
import PremiumCard from './Premium/PremiumCard'


function Home() {
  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role)
  const dispatch = useDispatch();
  return (
    <>
    <NavBar title='Home' dashboard={role} />
    <div className='home_container d-flex flex-column'>

      {/* Hero Header */}
      <HeroHeader/>

      {/* Title */}
      <div className='title'>
        Our Hotels
      </div>

      {/* Main Section */}
      <div className='main_section d-flex justify-content-between'>

          {/* Left Side */}
          <div className="left_side">
            
            {/* Search Component */}
            <Search/>

            {/* Guide paragraph */}
            <p className="guide_paragraph my-3">here is the list of the hotels that are available in the platforme !</p>

            {/* Hotels List Component */}
            <List />
            
          </div>

          {/* Right Side */}
          <div className="right_side">

              {/* Premium */}
              <PremiumCard />

          </div>

      </div>
      
    </div>
    {/* <div>
      <Body />
    </div> */}
    </>
    
  )
}

export default Home