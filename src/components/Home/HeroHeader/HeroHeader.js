import React from 'react'
import { Link } from 'react-router-dom'

function HeroHeader() {
  return (
    <div className='hero_header w-100 d-flex justify-content-between'>

    {/* Left Side */}
    <div className="left_side d-flex flex-column justify-content-between h-100 w-50">

      {/* Logo */}
      <div className="logo d-flex justify-content-between">
        <svg  width="60.811" height="60.811" viewBox="0 0 60.811 60.811">
          <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#c33764"/>
              <stop offset="1" stop-color="#1d2671"/>
            </linearGradient>
          </defs>
          <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(30.406) rotate(45)" stroke="#fff" stroke-width="1" fill="url(#linear-gradient)">
            <rect width="43" height="43" rx="10" stroke="none"/>
            <rect x="0.5" y="0.5" width="42" height="42" rx="9.5" fill="none"/>
          </g>
        </svg>
        <p className="app_name">Booking App</p>
      </div>

      {/* Introduction */}
      <div className="introduction">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad optio ratione architecto dolore quia expedita enim quam maiores consectetur? Accusantium neque deserunt inventore blanditiis id maiores illo, aliquid ipsam.
      </div>

      {/* Get started Button */}

      <Link to='/auth/login' className="main_button">
        Get Started Now !
      </Link>

    </div>

    {/* Right Side */}
    <div className='right_side h-100 w-50'>
      
    </div>

  </div>
  )
}

export default HeroHeader