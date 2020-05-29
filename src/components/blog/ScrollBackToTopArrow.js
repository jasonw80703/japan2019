import React, { useState } from 'react';
import './ScrollBackToTopArrow.css';

export default function ScrollBackToTopArrow() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <span className="fas fa-arrow-circle-up fa-3x scroll-back-btn" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} />
  );
}