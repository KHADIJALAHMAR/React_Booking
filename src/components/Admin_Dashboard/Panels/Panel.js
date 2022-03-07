import React from 'react'
import ListHotel from './Hotels/List'
import ListOwner from './Owners/List'
import ListCustomer from './Customers/List'

function Panel({title}) {
  return (
    <>
    {title === 'Owners' && <ListOwner />}
    {title === 'Hotels' && <ListHotel/>}
    {title === 'Customers' && <ListCustomer />}
    </>
  )
}

export default Panel