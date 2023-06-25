import React, { useContext } from "react"
import carticon from "../images/cart2.svg"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cartTotalProducts } = useContext(CartContext)

  return (
    <Link to="/cart" className="btn btn-secondary position-relative mx-3">
      <img src={carticon} alt="Cart Icon" />
      {cartTotalProducts() > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-danger">
          {cartTotalProducts()}
          <span className="visually-hidden">Items in cart</span>
        </span>
      )}
    </Link>
  )
}

export default CartWidget
