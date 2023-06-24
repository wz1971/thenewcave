import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Cart from "./components/Cart/Cart"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import NotFound from "./components/NotFound/NotFound"
import Goodbye from "./components/Goodbye/Goodbye"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./components/context/CartContext"
import Checkout from "./components/Checkout/Checkout"

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path={"/goodbye/:orderId"} element={<Goodbye />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
