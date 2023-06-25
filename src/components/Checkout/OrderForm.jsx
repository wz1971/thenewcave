import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

const OrderForm = ({ onSubmit }) => {
  const { cartTotalAmount, cart } = useContext(CartContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const cartItems = cart.map((prod) => ({
    id: prod.id,
    title: prod.title,
    price: prod.price,
    quantity: prod.quantity,
  }))

  const handleSubmit = (e) => {
    const formData = {
      name: firstName + " " + lastName,
      phone: phoneNumber,
      email: email,
      items: cartItems,
      totalAmount: cartTotalAmount(),
      date: new Date(),
    }
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="container d-flex align-prods-bottom justify-content-center">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="inputFirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            id="inputLastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            name="phoneNumber"
            type="text"
            className="form-control"
            id="inputPhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1-222-333-4444"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail1" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="inputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jdoe@somemail.com"
            required
          />
        </div>
        <div className="col d-flex justify-content-center pt-4">
          <button className="btn btn-secondary" type="submit">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm
