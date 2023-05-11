import React from "react"
import Carousel from "./Carousel"

const ItemListContainer = ({ myalert }) => {

  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show my-0 text-center" role="alert">
        {myalert} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  )
}

export default ItemListContainer
