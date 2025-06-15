import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../App';

const Category = () => {
  const { categoryName } = useParams();
  
  // Filter products by category
  const categoryProducts = productsData.filter(
    product => product.category === categoryName
  ).sort((a, b) => {
    // Sort new products first, then by name
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return a.name.localeCompare(b.name);
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getResponsiveImage = (product, size = 'desktop') => {
    return product.categoryImage[size] || product.image[size];
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '120px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#fff' }}>{categoryName}</h1>
        </div>
      </section>

      {/* Products List */}
      <section className="section-spacing">
        <div className="container">
          {categoryProducts.map((product, index) => (
            <div 
              key={product.id} 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                gap: '8rem',
                marginBottom: index < categoryProducts.length - 1 ? '10rem' : '0',
                flexDirection: index % 2 === 1 ? 'row-reverse' : 'row'
              }}
              className={index % 2 === 1 ? 'reverse-layout' : ''}
            >
              <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                <img 
                  src={getResponsiveImage(product, 'desktop')}
                  alt={product.name}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px' 
                  }}
                />
              </div>
              
              <div style={{ order: index % 2 === 1 ? 1 : 2 }}>
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
                
                <h2 style={{ marginBottom: '2rem' }}>
                  {product.name}
                </h2>
                
                <p style={{ marginBottom: '2.5rem' }}>
                  {product.description}
                </p>
                
                <Link 
                  to={`/product/${product.slug}`} 
                  className="btn btn-primary"
                >
                  See Product
                </Link>
              </div>
            </div>
          ))}
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

export default Category; 