import React from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import trash from "../images/trash.svg"

const CartTable = () => {
  const { cart, cartTotalAmount, removeItem } = useContext(CartContext)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center fs-6">
              Item
            </th>
            <th scope="col" className="text-center fs-6">
              Quantity
            </th>
            <th scope="col" className="text-center fs-6">
              Name
            </th>
            <th scope="col" className="text-center fs-6">
              Price
            </th>
            <th scope="col" className="text-end fs-6">
              Amount
            </th>
            <th scope="col" className="text-center fs-6">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <th scope="row" className="text-center fs-6">
                {index + 1}
              </th>
              <td className="text-center fs-6">{item.quantity}</td>
              <td className="text-center fs-6">{item.title}</td>
              <td className="text-end fs-6">${item.price}</td>
              <td className="text-end fs-6">${item.price * item.quantity}</td>
              <td className="align-middle text-center fs-6">
                <button
                  className="btn btn-light"
                  onClick={() => {
                    removeItem(item.id)
                  }}
                  title="Remove Product"
                >
                  <img src={trash} alt="Remove product from cart" width={24} />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="text-end px-3 fw-bold fs-6">
              Total
            </td>
            <td className="fw-bold text-end fs-6">$ {cartTotalAmount()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
