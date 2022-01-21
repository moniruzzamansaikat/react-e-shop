import React from 'react';
import propTypes from 'prop-types';
import { useContext } from 'react/cjs/react.development';
import { ProductContext } from '../context/productContext';

function CartItems({ carts }) {
  const { removeFromCart } = useContext(ProductContext);

  return (
    <div className="row">
      {carts.map((cart, index) => (
        <div className="col col-12 col-md-6 mb-4" key={index}>
          <div className="card">
            <div className="text-center mt-4">
              <img
                src={cart.image}
                alt=""
                className="card-img-top"
                style={{ maxWidth: '150px' }}
              />
            </div>
            <div className="card-body">
              <h5>{cart.title}</h5>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(cart.id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

CartItems.propTypes = {
  carts: propTypes.array.isRequired,
};

export default CartItems;
