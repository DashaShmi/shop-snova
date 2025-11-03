import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import About from "./pages/about/About"
import Navbar from "./pages/components/Navbar"
import Contacts from "./pages/contacts/Contacts"
import Categoriy from "./pages/category/Category"
import ProductPage from "./pages/productPage/ProductPage"
import './App.css'

// категории
// shop/categories/wallets/

// продукты
// shop/products/fakewallet/


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />


          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path="category/:categoryId" element={<Categoriy />} />
            <Route path="product/:productId" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 