import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ stock, category, description, id, image, title, origin, price, provider }) => {
  return (
    <div className="card col-sm-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6>${price}</h6>
        <p className="card-text">Available stock: {stock}</p>
        <Link to={`/item/${id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Item
