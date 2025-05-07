// components/HeroSection.jsx (Versión mejorada)
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToMenu = () => {
    const targetPosition = 800;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // duración en milisegundos
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic = progress => progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="highlight-word">Difruta de tu comida </span>
            <span className="highlight-word">en 3 pasos</span>
          </h1>
  
          
          <div className="preparation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Descongela</h3>
              <p className="step-description">Preservando todos los nutrientes</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Herví</h3>
              <p className="step-description">Aproximadamente 15 minutos</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Serví</h3>
              <p className="step-description">¡Y a difrutar!</p>
            </div>
          </div>

          <button className="cta-button" onClick={scrollToMenu}>Descubrir Menú</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;