import React from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, removeItem, emptyCart, cartTotalProducts, cartTotalAmount } = useContext(CartContext)
  console.log("Items in cart: " + cartTotalProducts())
  console.log("Total amount: $" + cartTotalAmount())
  console.log(cart)

  if (cartTotalProducts() === 0) {
    return (
      <div className="container my-5">
        <h1>Cart</h1>
      </div>
    )
  } else {
    return (
      <div className="container my-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          {cart.map((item, index) => (
            <tbody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.quantity}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            </tbody>
          ))}
          <tr>
            <td colSpan={4} className="text-end px-3 fw-bold">
              Total
            </td>
            <td className="fw-bold">$ {cartTotalAmount()}</td>
          </tr>
        </table>
        <div className="container my-5">
          <div className="d-flex justify-content-around">
            <button type="button" className="btn" onClick={emptyCart}>
              Empty Cart
            </button>
            <Link to="/" className="btn">
              Continue Shopping
            </Link>
            <Link to="/checkout" className="btn">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
