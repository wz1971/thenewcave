import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import CartTable from "../Cart/CartTable"
import OrderForm from "./OrderForm"
import CartIsEmpty from "../Cart/CartIsEmpty"
import CartButtons from "../Cart/CartButtons"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { Navigate } from "react-router-dom"
import "./Checkout.css"

const Checkout = () => {
  const { cartTotalAmount, emptyCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)

  const handleOrderSubmit = (orderData) => {
    const db = getFirestore()
    const OrdersCollection = collection(db, "orders")
    addDoc(OrdersCollection, orderData)
      .then((result) => {
        setOrderId(result.id)
        emptyCart()
      })
      .catch((result) => {
        console.log("Error! Unable to register purchase!" + result)
      })
  }

  return cartTotalAmount === 0 ? (
    <CartIsEmpty />
  ) : (
    <div className="container-fluid p-5 d-flex justify-content-evenly vh-100" id="mainCheckoutContainer">
      <div className="container px-5 mx-2 border border-1">
        <h2 className="text-center p-5">Your items</h2>
        <CartTable />
        <CartButtons />
      </div>
      <div className="border border-1">
        <h2 className="text-center p-5">Your personal data</h2>
        <OrderForm onSubmit={handleOrderSubmit} />
      </div>
      <div className="row my-5">
        <div className="col text-center">{orderId ? <Navigate to={"/goodbye/" + orderId} /> : ""}</div>
      </div>
    </div>
  )
}

export default Checkout
