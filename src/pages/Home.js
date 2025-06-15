import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../App';

const Home = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Get the featured products
  const featuredProduct = productsData.find(p => p.slug === 'xx99-mark-two-headphones');
  const zx9Speaker = productsData.find(p => p.slug === 'zx9-speaker');
  const zx7Speaker = productsData.find(p => p.slug === 'zx7-speaker');
  const yx1Earphones = productsData.find(p => p.slug === 'yx1-earphones');

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p style={{ 
              color: 'white', 
              opacity: 0.5, 
              letterSpacing: '10px', 
              textTransform: 'uppercase', 
              fontSize: '0.875rem' 
            }}>
              New Product
            </p>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to="/product/xx99-mark-two-headphones" className="btn btn-primary">
              See Product
            </Link>
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

      {/* Featured Products */}
      <section className="section-spacing">
        <div className="container">
          {/* ZX9 Speaker */}
          <div style={{
            backgroundColor: '#D87D4A',
            borderRadius: '8px',
            padding: '120px 95px',
            color: 'white',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '8rem',
            marginBottom: '3rem',
            backgroundImage: 'url(/assets/home/desktop/pattern-circles.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center left',
            backgroundSize: 'contain'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/assets/home/desktop/image-speaker-zx9.png" 
                alt="ZX9 Speaker"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>ZX9 Speaker</h2>
              <p style={{ color: 'white', opacity: 0.75, marginBottom: '2.5rem' }}>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <Link to="/product/zx9-speaker" className="btn" style={{
                backgroundColor: '#000',
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                See Product
              </Link>
            </div>
          </div>

          {/* ZX7 Speaker */}
          <div style={{
            backgroundImage: 'url(/assets/home/desktop/image-speaker-zx7.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            padding: '120px 95px',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{ marginBottom: '2rem' }}>ZX7 Speaker</h3>
              <Link to="/product/zx7-speaker" className="btn btn-secondary">
                See Product
              </Link>
            </div>
          </div>

          {/* YX1 Earphones */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            <div style={{
              backgroundImage: 'url(/assets/home/desktop/image-earphones-yx1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              minHeight: '320px'
            }}>
            </div>
            <div style={{
              backgroundColor: '#F1F1F1',
              borderRadius: '8px',
              padding: '120px 95px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{ marginBottom: '2rem' }}>YX1 Earphones</h3>
              <Link to="/product/yx1-earphones" className="btn btn-secondary">
                See Product
              </Link>
            </div>
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

export default Home; 