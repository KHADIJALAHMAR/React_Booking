import React from 'react'
import Item from './Item'

function List() {
  return (
    <div className="hotels_list d-flex flex-column">

        {/* Hotels cards */}
        <Item/>
        <Item/>
        <Item/>

    </div>
  )
}

export default List