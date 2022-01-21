import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, confirmOrder } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // calculate total price
  const cartTotal = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  // confirm order
  const handleConfirmOrder = () => {
    if (!user) {
      navigate('/sign-in', {
        state: {
          message: 'Please sign in to confirm your order.',
        },
      });
    } else {
      confirmOrder();
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Checkout</h2>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Price</td>
              <td>{cartTotal}$</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>20$</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{cartTotal + 20}$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <button className="btn btn-success" onClick={handleConfirmOrder}>
          Checkout now
        </button>
      </div>
    </div>
  );
}

export default Checkout;
