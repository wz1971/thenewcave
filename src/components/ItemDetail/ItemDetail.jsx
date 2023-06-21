import React, { useState, useContext, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext)
  const [item, setItem] = useState({})
  const onAdd = (qty) => {
    addItem(item, qty)
  }

  useEffect(() => {
    setItem(product)
  }, [product])

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center">{item.title}</h5>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
