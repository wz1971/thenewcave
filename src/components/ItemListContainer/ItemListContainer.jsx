import React, { useEffect, useState } from "react"
//import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const category = useParams().categoryId

  useEffect(() => {
    const db = getFirestore()
    const prodCollection = collection(db, "items")
    const q = category ? query(prodCollection, where("category", "==", category)) : prodCollection
    getDocs(q).then((result) => {
      if (result.size > 0) {
        setProducts(result.docs.map((product) => ({ id: product.id, ...product.data() })))
      } else {
        console.error("No products found in the collection.")
      }
    })
  }, [category])

  return (
    <div className="container my-5">
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
