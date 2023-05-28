import React from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ stock, category, description, id, image, title, origin, price, provider }) => {
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
        <ItemCount initial={1} stock={stock} />
      </div>
    </div>
  )
}

export default ItemDetail
