import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillsSlider from './components/SkillsSlider';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#111827', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main style={{ flex: 1 }}>
        <Hero />
        <SkillsSlider />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
