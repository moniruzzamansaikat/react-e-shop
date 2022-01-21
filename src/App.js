import { Routes, Route } from 'react-router-dom';

// componenets
import Navbar from './components/Navbar';
import GoToTop from './components/GoToTop';
import Home from './screens/Home';

// screens
import Login from './screens/Login';
import Cart from './screens/Cart';
import { ProductContext } from './context/productContext';
import { useState } from 'react';
import { UserContext } from './context/userContext';
import Profile from './screens/Profile';
import Private from './screens/Private';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });
  const [user, setUser] = useState(null);
  const [confirmedOrder, setConfirmedOrder] = useState(false);

  // remove from cart
  const removeFromCart = (id) => {
    const filteredCart = cart.filter((ct) => ct.id !== id);
    setCart(filteredCart);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
  };

  // add to cart
  const addToCart = (product, id) => {
    // if item not already in
    if (!cart.find((pd) => pd?.id === id)) {
      const newCart = [product, ...cart];
      setCart([product, ...cart]);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  // confirm order
  const confirmOrder = () => {
    setCart([]);
    setConfirmedOrder(true);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        removeFromCart,
        addToCart,
        confirmOrder,
        confirmedOrder,
        setConfirmedOrder,
      }}
    >
      <UserContext.Provider value={{ user, setUser }}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<Login />} />
            <Route element={<Private />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>

          <GoToTop />
          <ToastContainer />
        </div>
      </UserContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
