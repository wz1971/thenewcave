import React, { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const id = useParams().id

  useEffect(() => {
    const db = getFirestore()
    const product = doc(db, "items", id)
    getDoc(product).then((result) => {
      setItem({ id: result.id, ...result.data() })
      setLoading(false)
    })
  }, [id])

  return <div className="ItemDetailContainer d-flex">{loading ? <Loading /> : <ItemDetail product={item} />}</div>
}

export default ItemDetailContainer
