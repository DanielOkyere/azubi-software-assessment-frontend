import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../App';

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    clearCart,
    getCartTotal
  } = useCart();

  if (!isCartOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-overlay" onClick={handleOverlayClick}>
      <div className="cart-modal">
        <div className="cart-header">
          <h3>Cart ({cartItems.length})</h3>
          {cartItems.length > 0 && (
            <button 
              onClick={clearCart}
              style={{
                background: 'none',
                border: 'none',
                color: '#000',
                opacity: 0.5,
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '0.9375rem'
              }}
            >
              Remove all
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={`/assets/cart/image-${item.slug}.jpg`} 
                    alt={item.name}
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      {item.name.replace(/headphones|earphones|speaker/gi, '').trim()}
                    </div>
                    <div className="cart-item-price">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: '700' }}>
                      {item.quantity}
                    </span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <div className="total-price">
                TOTAL {formatPrice(getCartTotal())}
              </div>
              <Link 
                to="/checkout" 
                className="btn btn-primary"
                onClick={handleCheckout}
                style={{ 
                  width: '100%', 
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 