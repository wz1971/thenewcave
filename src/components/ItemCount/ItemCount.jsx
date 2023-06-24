import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({ stock, onAdd }) => {
  const [items, setItems] = useState(1)
  const [itemStock, setItemStock] = useState(stock)
  const [itemAdded, setItemAdded] = useState(false)

  const increment = () => {
    if (items < itemStock) {
      setItems(items + 1)
    } else alert("Out of stock.")
  }

  const decrement = () => {
    if (items > 0) {
      setItems(items - 1)
    } else alert("You have no items selected.")
  }

  const addToCart = () => {
    if (items <= itemStock) {
      setItemStock(itemStock - items)
      setItems(1)
      setItemAdded(true)
      onAdd(items)
    }
  }

  useEffect(() => {
    setItemStock(stock)
  }, [stock])

  return (
    <div className="container-fluid mt-3">
      <div className="row text-center">
        <div className="col">
          <div className="btn-group my-1" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary mx-2 border-0" onClick={decrement}>
              -
            </button>
            <button type="button" className="btn btn-secondary border-0">
              {items}
            </button>
            <button type="button" className="btn btn-secondary mx-2 border-0" onClick={increment}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          {itemAdded ? (
            <div>
              <Link to="/cart" className="btn">
                <b>Finish purchase</b>
              </Link>
              <Link to="/" className="btn">
                <b>Continue Shopping</b>
              </Link>
            </div>
          ) : (
            <button type="button" className="btn" onClick={addToCart}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemCount
