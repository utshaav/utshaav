import React from 'react';
import './styles/globals.css';
import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Experience, Contact } from './components/sections';

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
