import React from 'react';
import { useCart } from '../App';

const OrderConfirmation = () => {
  const { orderConfirmation, setOrderConfirmation, clearCart } = useCart();

  if (!orderConfirmation) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setOrderConfirmation(null);
    clearCart();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const { orderDetails, totals } = orderConfirmation;

  return (
    <div className="cart-overlay" onClick={handleOverlayClick}>
      <div className="cart-modal" style={{ maxWidth: '540px', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: '#D87D4A', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.14L4.86 10 15 0" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"/>
            </svg>
          </div>

          <h2 style={{ 
            fontSize: '2rem', 
            lineHeight: '2.25rem', 
            letterSpacing: '1.15px',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            fontWeight: '700'
          }}>
            Thank you<br />for your order
          </h2>

          <p style={{ opacity: 0.5, marginBottom: '2rem' }}>
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            backgroundColor: '#F1F1F1', 
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {orderDetails.slice(0, 1).map((item) => (
              <div key={item.id} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: orderDetails.length > 1 ? '1rem' : '0'
              }}>
                <img 
                  src={`/assets/cart/image-${item.slug}.jpg`} 
                  alt={item.name}
                  style={{ width: '50px', height: '50px', borderRadius: '8px' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9375rem' }}>
                    {item.name.replace(/headphones|earphones|speaker/gi, '').trim()}
                  </div>
                  <div style={{ opacity: 0.5, fontSize: '0.875rem' }}>
                    {formatPrice(item.price)}
                  </div>
                </div>
                <div style={{ fontWeight: '700', opacity: 0.5 }}>
                  x{item.quantity}
                </div>
              </div>
            ))}
            
            {orderDetails.length > 1 && (
              <>
                <div style={{ 
                  borderTop: '1px solid #ccc', 
                  paddingTop: '0.75rem',
                  textAlign: 'center',
                  opacity: 0.5,
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  and {orderDetails.length - 1} other item{orderDetails.length > 2 ? 's' : ''}
                </div>
              </>
            )}
          </div>

          <div style={{ 
            backgroundColor: '#000', 
            color: '#fff', 
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ marginBottom: '0.5rem', opacity: 0.5, fontSize: '0.9375rem' }}>
              GRAND TOTAL
            </div>
            <div style={{ fontSize: '1.125rem', fontWeight: '700' }}>
              {formatPrice(totals.grandTotal)}
            </div>
          </div>
        </div>

        <button 
          onClick={handleClose}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation; 