import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { productsData, useCart } from '../App';

const Product = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find the product by slug
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show some feedback (you could add a toast notification here)
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      {/* Back Button */}
      <section style={{ padding: '80px 0 0' }}>
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
              marginBottom: '3rem'
            }}
          >
            Go Back
          </button>
        </div>
      </section>

      {/* Product Details */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '8rem',
            marginBottom: '10rem'
          }}>
            <div>
              <img 
                src={product.image.desktop}
                alt={product.name}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }}
              />
            </div>
            
            <div>
              {product.new && (
                <p style={{ 
                  color: '#D87D4A',
                  letterSpacing: '10px',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                  opacity: 1
                }}>
                  New Product
                </p>
              )}
              
              <h1 style={{ marginBottom: '2rem' }}>
                {product.name}
              </h1>
              
              <p style={{ marginBottom: '2.5rem' }}>
                {product.description}
              </p>

              <div style={{ 
                fontSize: '1.125rem', 
                fontWeight: '700',
                marginBottom: '3rem',
                color: '#000',
                opacity: 1
              }}>
                {formatPrice(product.price)}
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem' 
              }}>
                <div className="quantity-controls" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#F1F1F1',
                  padding: '0.75rem 1rem'
                }}>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(-1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '700',
                      color: '#000',
                      opacity: 0.25,
                      padding: '0.25rem 0.75rem'
                    }}
                  >
                    -
                  </button>
                  <span style={{ 
                    minWidth: '20px', 
                    textAlign: 'center', 
                    fontWeight: '700',
                    margin: '0 0.5rem'
                  }}>
                    {quantity}
                  </span>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '700',
                      color: '#000',
                      opacity: 0.25,
                      padding: '0.25rem 0.75rem'
                    }}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Features and In the Box */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '8rem',
            marginBottom: '10rem'
          }}>
            <div>
              <h3 style={{ marginBottom: '2rem' }}>Features</h3>
              <div style={{ whiteSpace: 'pre-line' }}>
                {product.features.split('\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1.5rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '2rem' }}>In the Box</h3>
              {product.includes.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  marginBottom: '0.5rem' 
                }}>
                  <span style={{ 
                    color: '#D87D4A', 
                    fontWeight: '700',
                    minWidth: '40px'
                  }}>
                    {item.quantity}x
                  </span>
                  <span style={{ opacity: 0.5 }}>
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '10rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <img 
                src={product.gallery.first.desktop}
                alt={`${product.name} gallery 1`}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }}
              />
              <img 
                src={product.gallery.second.desktop}
                alt={`${product.name} gallery 2`}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }}
              />
            </div>
            <div>
              <img 
                src={product.gallery.third.desktop}
                alt={`${product.name} gallery 3`}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px' 
                }}
              />
            </div>
          </div>

          {/* You May Also Like */}
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '4rem' }}>
              You May Also Like
            </h3>
            <div className="grid grid-3">
              {product.others.map((item, index) => (
                <div key={index} className="product-card">
                  <img 
                    src={item.image.desktop}
                    alt={item.name}
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '8px',
                      marginBottom: '2rem'
                    }}
                  />
                  <h3 style={{ marginBottom: '2rem' }}>{item.name}</h3>
                  <Link 
                    to={`/product/${item.slug}`} 
                    className="btn btn-primary"
                  >
                    See Product
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Preview */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-3">
            <Link to="/category/headphones" className="category-card">
              <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />
              <h3>Headphones</h3>
              <span className="btn">
                Shop
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                </svg>
              </span>
            </Link>
            
            <Link to="/category/speakers" className="category-card">
              <img src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" />
              <h3>Speakers</h3>
              <span className="btn">
                Shop
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                </svg>
              </span>
            </Link>
            
            <Link to="/category/earphones" className="category-card">
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
      </section>

      {/* Best Gear Section */}
      <section className="section-spacing">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '8rem'
          }}>
            <div>
              <h2 style={{ marginBottom: '2rem' }}>
                Bringing you the <span style={{ color: '#D87D4A' }}>best</span> audio gear
              </h2>
              <p>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                audio equipment.
              </p>
            </div>
            <div>
              <img 
                src="/assets/shared/desktop/image-best-gear.jpg" 
                alt="Best Gear"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product; 