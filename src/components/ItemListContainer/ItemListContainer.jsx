import React, { useEffect, useState } from "react"
import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const category = useParams().id

  useEffect(() => {
    getProducts()
      .then((response) => {
        if (category) {
          setProducts(response.filter((prod) => prod.category === category))
        } else {
          setProducts(response)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [category])

  return (
    <div className="listContainer">
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
