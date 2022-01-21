import React from 'react';
import PropTypes from 'prop-types';

function Search({ categories, category, setCategory }) {
  return (
    <div className="search">
      <div className="container">
        <ul>
          <li
            className={category === 'all' && 'active'}
            onClick={() => setCategory('all')}
          >
            All
          </li>
          {categories?.map((ctgory, index) => (
            <li
              key={index}
              className={category === ctgory && 'active'}
              onClick={() => setCategory(ctgory)}
            >
              {ctgory}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Search.propTypes = {
  categories: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Search;
