import React from 'react'
import Card from './Card'

function Cards({setPanel}) {
  return (
    <div>
      <div className='container-fluid py-4'>
        <div className='row my-4 mx-auto justify-content-center'>
            <Card title='Hotels' setPanel={setPanel} />
            <Card title='Customers' setPanel={setPanel} />
            <Card title='Owners' setPanel={setPanel} />
        </div>
      </div>
    </div>
    
  )
}

export default Cards