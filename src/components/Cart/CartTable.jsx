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
            <th scope="col" className="text-start">
              Item
            </th>
            <th scope="col" className="text-center">
              Quantity
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              Price
            </th>
            <th scope="col" className="text-end">
              Amount
            </th>
            <th scope="col" className="text-center">
              Remove from Cart
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <th scope="row" className="text-center">
                {index + 1}
              </th>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">{item.title}</td>
              <td className="text-end">${item.price}</td>
              <td className="text-end">${item.price * item.quantity}</td>
              <td className="align-middle text-center">
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
            <td colSpan={4} className="text-end px-3 fw-bold">
              Total
            </td>
            <td className="fw-bold text-end">$ {cartTotalAmount()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
