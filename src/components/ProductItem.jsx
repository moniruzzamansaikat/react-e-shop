import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';

function ProductItem({ product }) {
  const { addToCart } = useContext(ProductContext);
  const { id, title, description, price, category, image } = product;

  const handleAddToCart = () => {
    addToCart(
      {
        id,
        image,
        title,
        price,
      },
      id
    );
  };

  return (
    <div className="product-item">
      <div className="row">
        <div className="col-12 col-lg-5">
          <img src={image} alt={title} className="img-fluid product-img mb-3" />
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
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
