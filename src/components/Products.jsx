import React from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import useLocalstorage from '../hooks/useLocalstorage';

function Products({ products }) {
  return (
    <div className="container">
      <div className="products">
        {products.length === 0 && (
          <img className="loader" src="/img/loading.svg" alt="" />
        )}

        {products.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
