import React from 'react'
import Card from './Card'

function Cards({setPanel}) {
  return (
    
    <div className='row'>
        <Card title='Hotels' setPanel={setPanel} />
        <Card title='Customers' setPanel={setPanel} />
        <Card title='Owners' setPanel={setPanel} />
        <Card title='Pending Hotels' setPanel={setPanel}/>
        <Card title='Pending Owners' setPanel={setPanel} />
        <Card title='Refused Hotels'  setPanel={setPanel}/>
        <Card title='Refused Owners'  setPanel={setPanel}/>
    </div>
  )
}

export default Cards