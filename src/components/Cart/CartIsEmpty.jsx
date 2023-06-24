import React from "react"
import Carousel from "../Carousel/Carousel"
import "./Cart.css"

const CartIsEmpty = () => {
  return (
    <div>
      <Carousel />
      <div className="position-fixed top-50 start-50 translate-middle">
        <h1 className="p-3 text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3 opacity-75 fw-bold">
          Your cart is empty
        </h1>
      </div>
    </div>
  )
}

export default CartIsEmpty
