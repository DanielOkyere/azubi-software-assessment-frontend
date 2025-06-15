import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div style={{ borderTop: '4px solid #D87D4A', marginBottom: '48px', width: '100px' }} />
          
          <div className="footer-info">
            <div className="footer-text">
              <Link to="/" className="logo" style={{ display: 'block', marginBottom: '32px' }}>
                <img src="/assets/shared/desktop/logo.svg" alt="Audiophile" />
              </Link>
              
              <p style={{ color: 'white', opacity: 0.5, lineHeight: '25px' }}>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                visit our demo facility – we're open 7 days a week.
              </p>
              
              <p style={{ color: 'white', opacity: 0.5, marginTop: '48px', marginBottom: 0 }}>
                Copyright 2021. All Rights Reserved
              </p>
            </div>
            
            <div>
              <ul className="footer-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/headphones">Headphones</Link></li>
                <li><Link to="/category/speakers">Speakers</Link></li>
                <li><Link to="/category/earphones">Earphones</Link></li>
              </ul>
              
              <div className="social-links" style={{ marginTop: '105px' }}>
                <a href="#" aria-label="Facebook">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.46 0H1.54C.69 0 0 .69 0 1.54v20.92C0 23.31.69 24 1.54 24h11.28v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24l-1.91.001c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.11c.85 0 1.54-.69 1.54-1.54V1.54C24 .69 23.31 0 22.46 0z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 