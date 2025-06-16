import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../App';

const Checkout = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    calculateOrderTotals, 
    setOrderConfirmation 
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-money',
    eMoneyNumber: '',
    eMoneyPin: ''
  });

  const [errors, setErrors] = useState({});

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    navigate('/');
    return null;
  }

  const totals = calculateOrderTotals();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP Code is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    // Phone validation (basic)  
    if (formData.phone && !/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number format is invalid';
    }

    // e-Money validation
    if (formData.paymentMethod === 'e-money') {
      if (!formData.eMoneyNumber.trim()) newErrors.eMoneyNumber = 'e-Money Number is required';
      if (!formData.eMoneyPin.trim()) newErrors.eMoneyPin = 'e-Money PIN is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate order processing
      setOrderConfirmation({
        orderDetails: cartItems,
        totals: totals,
        customerInfo: formData
      });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '18px 24px',
    border: '1px solid #CFCFCF',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: '700',
    fontFamily: 'Manrope',
    outline: 'none'
  };

  const errorInputStyle = {
    ...inputStyle,
    borderColor: '#CD2C2C'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '-0.21px',
    marginBottom: '9px',
    color: '#000'
  };

  const errorLabelStyle = {
    ...labelStyle,
    color: '#CD2C2C'
  };

  return (
    <div style={{ backgroundColor: '#F1F1F1', minHeight: '100vh', padding: '80px 0' }}>
      <div className="container">
        <button 
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: '#000',
            opacity: 0.5,
            cursor: 'pointer',
            fontSize: '0.9375rem',
            marginBottom: '2rem'
          }}
        >
          Go Back
        </button>

        <div className="checkout-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Checkout Form */}
          <div style={{
            backgroundColor: '#fff',
            padding: '3rem',
            borderRadius: '8px'
          }}>
            <h1 style={{ marginBottom: '2.5rem' }}>Checkout</h1>
            
            <form onSubmit={handleSubmit}>
              {/* Billing Details */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ 
                  color: '#D87D4A', 
                  fontSize: '0.8125rem',
                  letterSpacing: '0.93px',
                  marginBottom: '1rem'
                }}>
                  Billing Details
                </h3>
                
                <div className="billing-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <label 
                      htmlFor="name" 
                      style={errors.name ? errorLabelStyle : labelStyle}
                    >
                      Name {errors.name && <span style={{ float: 'right' }}>{errors.name}</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alexei Ward"
                      style={errors.name ? errorInputStyle : inputStyle}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      style={errors.email ? errorLabelStyle : labelStyle}
                    >
                      Email Address {errors.email && <span style={{ float: 'right' }}>{errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alexei@mail.com"
                      style={errors.email ? errorInputStyle : inputStyle}
                    />
                  </div>
                </div>
                
                <div style={{ marginTop: '1rem' }}>
                  <label 
                    htmlFor="phone" 
                    style={errors.phone ? errorLabelStyle : labelStyle}
                  >
                    Phone Number {errors.phone && <span style={{ float: 'right' }}>{errors.phone}</span>}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 202-555-0136"
                    style={errors.phone ? errorInputStyle : inputStyle}
                  />
                </div>
              </div>

              {/* Shipping Info */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ 
                  color: '#D87D4A', 
                  fontSize: '0.8125rem',
                  letterSpacing: '0.93px',
                  marginBottom: '1rem'
                }}>
                  Shipping Info
                </h3>
                
                <div>
                  <label 
                    htmlFor="address" 
                    style={errors.address ? errorLabelStyle : labelStyle}
                  >
                    Address {errors.address && <span style={{ float: 'right' }}>{errors.address}</span>}
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="1137 Williams Avenue"
                    style={errors.address ? errorInputStyle : inputStyle}
                  />
                </div>
                
                <div className="shipping-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <div>
                    <label 
                      htmlFor="zipCode" 
                      style={errors.zipCode ? errorLabelStyle : labelStyle}
                    >
                      ZIP Code {errors.zipCode && <span style={{ float: 'right' }}>{errors.zipCode}</span>}
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      style={errors.zipCode ? errorInputStyle : inputStyle}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="city" 
                      style={errors.city ? errorLabelStyle : labelStyle}
                    >
                      City {errors.city && <span style={{ float: 'right' }}>{errors.city}</span>}
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      style={errors.city ? errorInputStyle : inputStyle}
                    />
                  </div>
                </div>
                
                <div style={{ marginTop: '1rem' }}>
                  <label 
                    htmlFor="country" 
                    style={errors.country ? errorLabelStyle : labelStyle}
                  >
                    Country {errors.country && <span style={{ float: 'right' }}>{errors.country}</span>}
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="United States"
                    style={errors.country ? errorInputStyle : inputStyle}
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ 
                  color: '#D87D4A', 
                  fontSize: '0.8125rem',
                  letterSpacing: '0.93px',
                  marginBottom: '1rem'
                }}>
                  Payment Details
                </h3>
                
                <div className="payment-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  alignItems: 'start'
                }}>
                  <div>
                    <label style={labelStyle}>Payment Method</label>
                  </div>
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '18px 24px',
                      border: formData.paymentMethod === 'e-money' ? '1px solid #D87D4A' : '1px solid #CFCFCF',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '700'
                    }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="e-money"
                        checked={formData.paymentMethod === 'e-money'}
                        onChange={handleInputChange}
                        style={{ marginRight: '1rem' }}
                      />
                      e-Money
                    </label>
                    
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '18px 24px',
                      border: formData.paymentMethod === 'cash' ? '1px solid #D87D4A' : '1px solid #CFCFCF',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '700'
                    }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        style={{ marginRight: '1rem' }}
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'e-money' && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginTop: '1rem'
                  }}>
                    <div>
                      <label 
                        htmlFor="eMoneyNumber" 
                        style={errors.eMoneyNumber ? errorLabelStyle : labelStyle}
                      >
                        e-Money Number {errors.eMoneyNumber && <span style={{ float: 'right' }}>{errors.eMoneyNumber}</span>}
                      </label>
                      <input
                        type="text"
                        id="eMoneyNumber"
                        name="eMoneyNumber"
                        value={formData.eMoneyNumber}
                        onChange={handleInputChange}
                        placeholder="238521993"
                        style={errors.eMoneyNumber ? errorInputStyle : inputStyle}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="eMoneyPin" 
                        style={errors.eMoneyPin ? errorLabelStyle : labelStyle}
                      >
                        e-Money PIN {errors.eMoneyPin && <span style={{ float: 'right' }}>{errors.eMoneyPin}</span>}
                      </label>
                      <input
                        type="text"
                        id="eMoneyPin"
                        name="eMoneyPin"
                        value={formData.eMoneyPin}
                        onChange={handleInputChange}
                        placeholder="6891"
                        style={errors.eMoneyPin ? errorInputStyle : inputStyle}
                      />
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'cash' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    marginTop: '2rem'
                  }}>
                    <img 
                      src="/assets/checkout/icon-cash-on-delivery.svg" 
                      alt="Cash on Delivery"
                      style={{ width: '48px', height: '48px' }}
                    />
                    <p style={{ opacity: 0.5 }}>
                      The 'Cash on Delivery' option enables you to pay in cash when our delivery courier 
                      arrives at your residence. Just make sure your address is correct so that your 
                      order will not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            alignSelf: 'start'
          }}>
            <h3 style={{ marginBottom: '2rem' }}>Summary</h3>
            
            {cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <img 
                  src={`/assets/cart/image-${item.slug}.jpg`} 
                  alt={item.name}
                  style={{ width: '64px', height: '64px', borderRadius: '8px' }}
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

            <div style={{ marginTop: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ opacity: 0.5, textTransform: 'uppercase' }}>Total</span>
                <span style={{ fontWeight: '700' }}>{formatPrice(totals.productTotal)}</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ opacity: 0.5, textTransform: 'uppercase' }}>Shipping</span>
                <span style={{ fontWeight: '700' }}>{formatPrice(totals.shipping)}</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <span style={{ opacity: 0.5, textTransform: 'uppercase' }}>VAT (Included)</span>
                <span style={{ fontWeight: '700' }}>{formatPrice(totals.vat)}</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '2rem'
              }}>
                <span style={{ opacity: 0.5, textTransform: 'uppercase' }}>Grand Total</span>
                <span style={{ fontWeight: '700', color: '#D87D4A' }}>
                  {formatPrice(totals.grandTotal)}
                </span>
              </div>

              <button 
                onClick={handleSubmit}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 