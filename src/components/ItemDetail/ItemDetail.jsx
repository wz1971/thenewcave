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
    <div className="card border-0">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid m-5" alt={item.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center m-5">{item.title}</h5>
            <p className="card-text m-5 p-5">{item.description}</p>
          </div>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
