// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Gallery />
      <WhatsApp/>
      <Footer />
    </div>
  );
}

export default App;