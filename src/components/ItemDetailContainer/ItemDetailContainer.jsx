import React, { useState, useEffect } from "react"
import { getProductById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const id = useParams().id

  useEffect(() => {
    getProductById(Number(id))
      .then((response) => {
        setProduct(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <div className="ItemDetailContainer d-flex">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
