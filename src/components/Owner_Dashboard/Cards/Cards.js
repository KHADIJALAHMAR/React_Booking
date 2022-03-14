import React from 'react'
import Card from './Card'

function Cards({setPanel}) {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row mx-auto justify-content-center'>
            <Card title='Rooms' setPanel={setPanel} />
            <Card title='Hotels' setPanel={setPanel} />
        </div>
      </div>
    </div>
    
  )
}

export default Cards