import React from "react"
import { useState } from "react"
import { useEffect } from "react"

const ItemCount = ({ stock, initial }) => {
  const [quantity, setQuantity] = useState(initial)
  const [itemStock, setItemStock] = useState(stock)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    } else alert("Out of stock.")
  }

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    } else alert("You have no items selected.")
  }

  const onAdd = () => {
    if (quantity <= itemStock) {
      setItemStock(itemStock - quantity)
      setQuantity(1)
    }
  }

  useEffect(() => {
    setItemStock(itemStock)
  }, [itemStock])

  return (
    <div className="container-fluid bg-warning-subtle">
      <div className="row text-center">
        <div className="col">
          <div className="btn-group my-1" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary mx-1" onClick={decrement}>
              -
            </button>
            <button type="button" className="btn btn-secondary">
              {quantity}
            </button>
            <button type="button" className="btn btn-secondary mx-1" onClick={increment}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="column">
          <button type="button" className="btn" onClick={onAdd}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount
