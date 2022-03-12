import React from 'react'

function UpdateHotel() {
  return (
    <div>
        <form
        className="auth_register_form"
        method="POST"
        action=""
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="email-addon"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Descreption"
            aria-label="Email"
            aria-describedby="email-addon"
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="image_cover"
            aria-label="Password"
            aria-describedby="password-addon"
          />
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="images"
            aria-label="Email"
            aria-describedby="password-addon"
            multiple
          />
        </div>

        <div className="mb-3">
          <select
            className="form-control"
            aria-label="Email"
            aria-describedby="email-addon"
            name="star"
            id="star"
            placeholder="Star"
          >
            <option selected disabled>
              Choose a Stars
            </option>
            <option value="star1">1</option>
            <option value="star2">2</option>
            <option value="star3">3</option>
            <option value="star4">4</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-dark w-100 my-4 mb-2"
          >
            Add Hotel
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateHotel