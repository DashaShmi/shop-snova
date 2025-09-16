import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/Cart"
import About from "./pages/about/About"
import Navbar from "./pages/components/Navbar"
import Contacts from "./pages/contacts/Contacts"
import Categoriy from "./pages/category/Category"
import ProductPage from "./pages/productPage/ProductPage"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/wallets" element={<Categoriy />} />
          <Route path="/shop/wallets/fakeWallet" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
