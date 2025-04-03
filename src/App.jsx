import "./assets/signup.css";
import "./assets/details.css";
 import { Routes, Route } from 'react-router-dom';
 import { useState } from 'react';
 import Product from './components/Product'
 import Signup from './components/signup'
 import Login from './components/login'
 import Navbar from './components/Navbar'
 import Details from './components/Details'
 import Cart from './components/Cart'

function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (products) => {
    console.log(products);
    setCart ((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === products.id);

        if (existingProduct) {
            return prevCart.map((item) =>
                item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item );
        } else {
            return [...prevCart, { ...products, quantity: 1 }];
        }
    });
};

//handle reomove cart
const handleRemoveFromCart = (productsid) => {
    setCart((prevCart) => 
        prevCart
    .map ((item) => (item.id === productsid ? { ...item, quantity: item.quantity - 1 } : item))
    .filter((item) => item.quantity > 0)
    );
};

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Product cart={cart} handleAddToCart={handleAddToCart} />} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Product/:id' element={<Details/>} />
        <Route path='/Cart' element={<Cart cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}  />} />
      </Routes>
    </>
  )
}

export default App
