import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/Cart";
function App() {

  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
          <div>
            <ToastContainer theme="dark" position="top-center"/>
            <Header cartItems ={cartItems}  />
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            </Routes>
          </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
