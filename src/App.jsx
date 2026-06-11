import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Capabilities from './components/Capabilities';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Capabilities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
