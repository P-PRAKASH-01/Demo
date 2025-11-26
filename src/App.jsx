import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white overflow-hidden relative selection:bg-neon selection:text-black">
        <MatrixBackground />
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <footer className="py-6 text-center text-gray-600 font-mono text-sm relative z-10 border-t border-gray-900 bg-black">
          <p>&copy; {new Date().getFullYear()} PRAKASH. SYSTEM SECURED.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
