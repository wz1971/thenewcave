import React from "react"
import Carousel from "../Carousel/Carousel"

const NotFound = () => {
  return (
    <div>
      <Carousel />
      <div className="position-fixed top-50 start-50 translate-middle">
        <div className="p-3 text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3 opacity-75 fw-bold">
          <h3>Your selection was not found</h3>
          <h5 className="text-center">(Error 404 - Not Found)</h5>
        </div>
      </div>
    </div>
  )
}

export default NotFound
