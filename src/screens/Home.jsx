import React, { useEffect, useMemo, useState } from 'react';
import Products from '../components/Products';
import Search from '../components/Search';

function Home() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [category, setCategory] = useState('all');

  // fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setShowProducts(json);
        setProducts(json);
      });
  }, []);

  // generate categories
  const categories = useMemo(() => {
    if (products.length) {
      return [...new Set(products.map((product) => product.category))];
    }
  }, [products]);

  // update products when category change
  useEffect(() => {
    if (category === 'all') {
      setShowProducts(products);
    } else {
      setShowProducts(() => {
        return products.filter((p) => p.category === category);
      });
    }
  }, [category]);

  return (
    <div className="home_page">
      <Search
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <Products products={showProducts} />
    </div>
  );
}

export default Home;
