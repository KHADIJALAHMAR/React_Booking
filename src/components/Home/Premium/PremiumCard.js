import React from 'react'

function PremiumCard() {
  return (
    <div className="premium_announcement d-flex flex-column">

        <div className="title">
        Premium 
        </div>

        <div className="premium_content d-flex flex-column">

        {/* Premium Description */}
        <div className='premium_description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I
        </div>

        {/* Go Premium */}
        <button className='main_button_bordered premium_button'>go Premium now</button>
        </div>
        

    </div>
  )
}

export default PremiumCard