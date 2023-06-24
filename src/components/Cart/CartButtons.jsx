import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useLocation } from "react-router-dom"

const CartButtons = () => {
  const atCart = useLocation().pathname === "/cart"
  const { emptyCart } = useContext(CartContext)
  return (
    <div className="d-flex justify-content-around">
      <button type="button" className="btn" onClick={emptyCart}>
        Empty Cart
      </button>
      <Link to="/" className="btn">
        Continue Shopping
      </Link>
      {atCart ? (
        <Link to="/checkout" className="btn">
          Check Out
        </Link>
      ) : (
        ""
      )}
    </div>
  )
}

export default CartButtons
