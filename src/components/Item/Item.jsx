import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ stock, id, image, title, price }) => {
  return (
    <div className="card col-md-3 border-0 my-5 mx-5 justify-content-evenly">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6>${price}</h6>
        <Link to={`/item/${id}`} className="btn btn-secondary border-0">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Item
