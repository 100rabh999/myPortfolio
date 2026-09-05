import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="section hero animate-fade-up">
      <div className="container hero-content">
        <h1 className="hero-title">Saurabh Singh</h1>
        <h2 className="hero-subtitle">
          <span className="text-gradient">Senior Software Engineer</span> · Full-Stack · AI/GenAI
        </h2>
        
        <p className="hero-description">
          Software Engineer building scalable products, AI-powered systems, and developer-focused platforms.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
          <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
        
        <div className="hero-status mono delay-200 animate-fade-up">
          <span className="status-indicator"></span>
          Currently: Senior Software Engineer @ Techeeez
        </div>
      </div>
    </section>
  );
};
