import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore"
import Loading from "../Loading/Loading"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const category = useParams().categoryId
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const prodCollection = collection(db, "items")
    const q = category
      ? query(prodCollection, where("category", "==", category))
      : query(prodCollection, orderBy("category"))
    getDocs(q).then((result) => {
      if (result.size > 0) {
        setProducts(result.docs.map((product) => ({ id: product.id, ...product.data() })))
        setLoading(false)
      } else {
        console.error("No products found in the collection.")
      }
    })
  }, [category])

  return loading ? <Loading /> : <ItemList products={products} />
}

export default ItemListContainer
