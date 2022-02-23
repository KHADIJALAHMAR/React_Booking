import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='admin_dash_cards'>
        <Card title='Hotels' />
        <Card title='Customers' />
        <Card title='Owners' />
        <Card title='Pending Hotels' />
        <Card title='Pending Owners' />
        <Card title='Refused Hotels' />
        <Card title='Refused Owners' />
    </div>
  )
}

export default Cards