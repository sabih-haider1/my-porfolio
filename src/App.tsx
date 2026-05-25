import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import CurrentlyBuilding from './components/CurrentlyBuilding';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Projects />
        <CurrentlyBuilding />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
