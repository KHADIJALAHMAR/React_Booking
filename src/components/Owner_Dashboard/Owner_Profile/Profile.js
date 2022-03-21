import React from 'react'
import GetOwner from './Crud/GetOwner'
import imag from '../../../assest/img/curved0.jpg'
import profileimg from '../../../assest/img/bruce-mars.jpg'


function Profile() {
  return (
    <>
    <div class="page-header min-height-300 border-radius-xl mt-4"style={{ backgroundImage: `url(${imag})`}} >
    <span class="mask bg-gradient-primary opacity-6"></span>
  </div>
  <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
    <div class="row gx-4">
      <div class="col-auto">
        <div class="avatar avatar-xl position-relative">
        <img src={profileimg} alt="profile_image" class="w-100 border-radius-lg shadow-sm"/>
        </div>
      </div>
      <div class="col-auto my-auto">
        <div class="h-100">
          <h5 class="mb-1">
            Alec Thompson
          </h5>
          <p class="mb-0 font-weight-bold text-sm">
            CEO / Co-Founder
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
        <div class="nav-wrapper position-relative end-0">
         
        </div>
      </div>
    </div>
  </div>
  <GetOwner/>
    </>
    
  )
}

export default Profile