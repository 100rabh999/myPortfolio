import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer style={{ padding: '2.5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
        <p className="mono" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          © {new Date().getFullYear()} Saurabh Singh. Built with React, TypeScript &amp; Vite.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Senior Software Engineer · Full-Stack Developer · AI/GenAI &amp; Industrial Systems
        </p>
      </footer>
    </div>
  );
};

export default App;
