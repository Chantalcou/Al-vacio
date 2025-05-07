// components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.instagram.com/alvaciohumo/"   target="_blank" aria-label="Instagram"><FaInstagram className="icon" /></a>
          <a href="https://wa.me/1568824488"   target="_blank"  aria-label="WhatsApp"><FaWhatsapp className="icon" /></a>
     
        </div>
        <div className="footer-info">
          <p>© 2025 Delicias Gourmet</p>
          <p>Diseñado con ♥ por Coutenceau Chantal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;