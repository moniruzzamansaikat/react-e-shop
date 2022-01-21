import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';

function ProductItem({ product }) {
  const { addToCart, cart, removeFromCart } = useContext(ProductContext);
  const { id, title, description, price, category, image } = product;

  // add to cart
  const handleAddToCart = () => {
    if (cart.some((item) => item.id === id)) {
      removeFromCart(id);
    } else {
      addToCart(
        {
          id,
          image,
          title,
          price,
        },
        id
      );
    }
  };

  return (
    <div className="product-item">
      <div className="row mx-0">
        <div className="col-12 col-lg-5">
          <img src={image} alt={title} className="product-img mb-3" />
        </div>
        <div className="col-12 col-lg-7">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="item">
            Price: <span>{price}$</span>
          </p>
          <p className="item">
            Category: <span>{category}</span>
          </p>
          <button className="btn btn-custom" onClick={handleAddToCart}>
            {cart.some((item) => item.id === id)
              ? 'Remove from cart'
              : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
