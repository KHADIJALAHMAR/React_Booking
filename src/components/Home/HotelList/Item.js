import React from 'react'

function Item() {
  return (
    <div className="hotel_card d-flex ">

        {/* Image container */}
        <div className='image_container h-100'>
            ...
        </div>
        
        {/* Hotel Information */}
        <div className='hotel_informations d-flex flex-column'>

            <h5 className='hotel_name'>Hotel Menara</h5>

            <p className='hotel_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

            <div className="tags_container d-flex">
            <div className="hotel_city_tag">Marrakech</div>
            <div className="hotel_stars_tag">Stars : 5</div>
            </div>

        </div>

    </div>
  )
}

export default Item