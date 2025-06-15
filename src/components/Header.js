import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../App';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, getCartItemsCount } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const cartItemsCount = getCartItemsCount();

  return (
    <header className="header">
      <div className="container">
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        
        <Link to="/" className="logo">
          <img src="/assets/shared/desktop/logo.svg" alt="Audiophile" />
        </Link>

        <nav className="nav-menu">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/headphones">Headphones</Link></li>
            <li><Link to="/category/speakers">Speakers</Link></li>
            <li><Link to="/category/earphones">Earphones</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="cart-button"
            onClick={handleCartClick}
            aria-label="Open shopping cart"
          >
            <svg viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="cart-count">{cartItemsCount}</span>
            )}
          </button>
        </div>

        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/category/headphones" onClick={closeMobileMenu}>Headphones</Link></li>
            <li><Link to="/category/speakers" onClick={closeMobileMenu}>Speakers</Link></li>
            <li><Link to="/category/earphones" onClick={closeMobileMenu}>Earphones</Link></li>
          </ul>
          
          <div className="mobile-categories">
            <div className="grid grid-3" style={{ marginTop: '2rem' }}>
              <Link to="/category/headphones" className="category-card" onClick={closeMobileMenu}>
                <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />
                <h3>Headphones</h3>
                <span className="btn">
                  Shop
                  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                  </svg>
                </span>
              </Link>
              
              <Link to="/category/speakers" className="category-card" onClick={closeMobileMenu}>
                <img src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" />
                <h3>Speakers</h3>
                <span className="btn">
                  Shop
                  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                  </svg>
                </span>
              </Link>
              
              <Link to="/category/earphones" className="category-card" onClick={closeMobileMenu}>
                <img src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" />
                <h3>Earphones</h3>
                <span className="btn">
                  Shop
                  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div 
            className="mobile-overlay" 
            onClick={closeMobileMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 999
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header; 