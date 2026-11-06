import React from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="section hero animate-fade-up">
      <div className="container hero-content">
        <h1 className="hero-title">Saurabh Singh</h1>
        <h2 className="hero-subtitle">
          <span className="typing-effect mono text-gradient">
            Senior Software Engineer · Full-Stack · AI/GenAI
          </span>
        </h2>
        
        <p className="hero-description">
          Software Engineer specializing in full-stack development, AI-powered applications, enterprise software, and industrial automation systems. Experienced across architecture, hardware integration, and multi-location production deployments.
        </p>

        <div className="hero-contact-chips mono">
          <span className="contact-chip">
            <MapPin size={15} className="chip-icon" />
            Maharashtra, India
          </span>
          <a href="tel:+917058107207" className="contact-chip link-chip">
            <Phone size={15} className="chip-icon" />
            +91 70581 07207
          </a>
          <a href="mailto:saurabhsingh2001.sk@gmail.com" className="contact-chip link-chip">
            <Mail size={15} className="chip-icon" />
            saurabhsingh2001.sk@gmail.com
          </a>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
          <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <FileText size={16} style={{ marginRight: '6px', display: 'inline' }} />
            Download Resume
          </a>
        </div>
        
        <div className="hero-status mono delay-200 animate-fade-up">
          <span className="status-indicator"></span>
          <span className="status-text">&gt;_ Currently: Senior Software Engineer @ Techeeez &amp; Independent Consultant</span>
        </div>
      </div>
    </section>
  );
};
