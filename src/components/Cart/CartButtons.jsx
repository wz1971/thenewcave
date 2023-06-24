import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useLocation } from "react-router-dom"

const CartButtons = () => {
  const atCart = useLocation().pathname === "/cart"
  const { emptyCart } = useContext(CartContext)
  return (
    <div className="d-flex justify-content-around mt-5 py-5">
      <button type="button" className="btn btn-secondary fs-6" onClick={emptyCart}>
        Empty Cart
      </button>
      <Link to="/" className="btn btn-secondary fs-6">
        Continue Shopping
      </Link>
      {atCart ? (
        <Link to="/checkout" className="btn btn-secondary fs-6">
          Check Out
        </Link>
      ) : (
        ""
      )}
    </div>
  )
}

export default CartButtons
