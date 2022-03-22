import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Body from './Home/Body'
import {logoutAction} from '../actions/authActions'

function Home() {
  const authenticated = useSelector(state => state.authenticated);
  const dispatch = useDispatch();
  return (
    <div>
      {authenticated && <button onClick={() => {
       console.log('here');
       dispatch(logoutAction())}}>LOGOUT</button>}
      <Body />
    </div>
  )
}

export default Home