import React from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartButtons from "./CartButtons"
import CartTable from "./CartTable"
import CartIsEmpty from "./CartIsEmpty"

const Cart = () => {
  const { cartTotalProducts } = useContext(CartContext)
  if (cartTotalProducts() === 0) {
    return <CartIsEmpty />
  } else {
    return (
      <div className="container-fluid vh-100 vw100 p-5" id="mainCartContainer">
        <div className="p-5">
          <h1>Items in your cart</h1>
        </div>
        <div>
          <CartTable />
          <CartButtons />
        </div>
      </div>
    )
  }
}

export default Cart
