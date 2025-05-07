// components/Gallery.jsx (Diseño lateral)
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const featuredDish = {
    name: "Goulash con Spaetzles",
    category: "Especialidad Húngara",
    description: "Carne tierna estofada con paprika ahumada, acompañada de tradicionales spaetzles caseros",
    imageUrl: "https://res.cloudinary.com/dqgjcfosx/image/upload/v1746363142/goulash-G_y9zghc.png?w=800&q=80"
  };

  return (
    <section className="side-gallery">
      <div className="gallery-container">
        <div className="image-column">
          <img 
            src={featuredDish.imageUrl}
            alt={featuredDish.name}
            className="elegant-image"
          />
        </div>
        
        <div className="content-column">
          <div className="dish-content">
            <span className="dish-category">{featuredDish.category}</span>
            <h3>{featuredDish.name}</h3>
            <div className="divider"></div>
            <p className="dish-description">{featuredDish.description}</p>
            <button className="details-button">
              Video
              <span className="icon-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;