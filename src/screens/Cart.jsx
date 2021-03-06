import React, { useContext, useEffect } from 'react';
import CartItems from '../components/CartItems';
import Checkout from '../components/Checkout';
import SuccessOrder from '../components/SuccessOrder';
import { ProductContext } from '../context/productContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, confirmedOrder, setConfirmedOrder } =
    useContext(ProductContext);

  // remove thank you message after 5 seconds
  useEffect(() => {
    const interval = setTimeout(() => {
      setConfirmedOrder(false);
    }, 5000);

    return () => clearTimeout(interval);
  }, [setConfirmedOrder]);

  return (
    <div className="container">
      <div className="cartpage">
        {confirmedOrder && <SuccessOrder />}

        {!confirmedOrder && cart.length === 0 && (
          <div className="empty-cart mt-5">
            <img
              src="/img/empty-cart.svg"
              alt="empty cart"
              className="img-fluid"
              style={{ maxWidth: '200px' }}
            />
            <h2 className="mt-5">
              Your cart is empty | <Link to="/">Shop Now</Link>
            </h2>
          </div>
        )}

        {/* loop thro cart item */}
        <div className="row">
          <div className="col col-12 col-md-8">
            <CartItems carts={cart} />
          </div>

          <div className="col col-12 col-md-4">
            {!confirmedOrder && cart.length !== 0 && <Checkout />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
