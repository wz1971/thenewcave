import React, { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({ stock, description, idprod, image, title }) => {
  const [addedQty, setAddedQty] = useState(0)

  const onAdd = (qty) => {
    setAddedQty(qty)
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small>Available Stock: {stock}</small>
            </p>
          </div>
        </div>
        {addedQty > 0 ? <Link to="/cart">Finish Purchase</Link> : <ItemCount initial={1} stock={stock} onAdd={onAdd} />}
      </div>
    </div>
  )
}

export default ItemDetail
