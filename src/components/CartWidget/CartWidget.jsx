import React from "react"
import carticon from "../images/cart2.svg"

const CartWidget = () => {
  return (
    <button type="button" className="btn btn-secondary position-relative mx-3">
      <img src={carticon} alt="Cart Icon" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-danger">
        3<span className="visually-hidden">unread messages</span>
      </span>
    </button>
  )
}

export default CartWidget
