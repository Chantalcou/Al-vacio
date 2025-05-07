// components/Navbar.jsx
import React from 'react';
import './MenuPreview.css';

const MenuPreview = () => {
  return (
    <section id="menu-preview" className="menu-preview">
      <div className="section-header">
        <h3>Nuestro Plato Especial</h3>
        <p className="section-subtitle">Una experiencia única</p>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <div
            className="dish-image"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1")',
            }}
          >
            <div className="price-tag">$89</div>
          </div>
          <div className="dish-info">
            <h4>Risotto de Trufa Negra</h4>
            <p className="ingredients">
              Arborio, trufa negra de Piamonte, parmesano 24 meses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
