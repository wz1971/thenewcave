import React, { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import Loading from "../Loading/Loading"
import NotFound from "../NotFound/NotFound"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [prodFound, setProdFound] = useState(false)
  const [dataFetched, setDataFetched] = useState(false)
  const id = useParams().id

  useEffect(() => {
    const db = getFirestore()
    const product = doc(db, "items", id)
    getDoc(product).then((result) => {
      setItem({ id: result.id, ...result.data() })
      if (result.exists()) {
        setProdFound(true)
      }
      setDataFetched(true)
    })
  }, [id])

  if (!dataFetched) {
    return <Loading />
  } else if (prodFound) {
    return <ItemDetail product={item} />
  } else {
    return <NotFound />
  }
}

export default ItemDetailContainer
