import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const inCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const addItem = (item, qty) => {
    if (inCart(item.id)) {
      let index = cart.findIndex((prod) => prod.id === item.id)
      console.log("Product exists in cart at position: " + index)
      cart[index].quantity += qty
      console.log("Now we have " + qty + " units of this product")
      setCart([...cart])
    } else {
      console.log("Product not in cart, adding to array " + qty + " of " + item.id)
      setCart([...cart, { ...item, quantity: qty }])
    }
  }

  const removeItem = (id) => {
    const products = cart.filter((prod) => prod.id !== id)
    setCart([...products])
  }

  const emptyCart = () => {
    setCart([])
  }

  const cartTotalProducts = () => {
    return cart.reduce((total, prod) => (total += prod.quantity), 0)
  }

  const cartTotalAmount = () => {
    return cart.reduce((amount, prod) => (amount += prod.quantity * prod.price), 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, cartTotalProducts, cartTotalAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
