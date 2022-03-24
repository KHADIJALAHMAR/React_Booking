import React from 'react'

import { useSelector , useDispatch} from 'react-redux'
import Body from './Home/Body'
import NavBar from './Shared_Elements/NavBar'


function Home() {
  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role)
  const dispatch = useDispatch();
  return (
    <>

    <NavBar title='Home' dashboard={role} />
    <div>
      <Body />
    </div>
    </>
    

  )
}

export default Home