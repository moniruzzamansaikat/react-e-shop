import React, { useEffect, useRef, useState } from 'react';

function GoToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#" className={`go_to_top ${scrollPosition < 1000 && 'd-none'}`}>
      <img src="/img/top-arrow.svg" alt="" />
    </a>
  );
}

export default GoToTop;
