// Navbar.jsx (Versión mejorada)
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/TUNUMERODEWHATSAPP', '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-preview');
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-wrapper">
          <h1 className="logo">AL VACIO</h1>
          <div className="divider-line"></div>
          <p className="sublogo">COMIDAS ENVASADAS AL VACIO</p>
        </div>
        
        <ul className="nav-links">
          <li><button onClick={scrollToMenu} className="nav-link">Descubrí el Menú</button></li>
          <li><button onClick={handleWhatsAppClick} className="nav-link contact-button">Contacto</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;