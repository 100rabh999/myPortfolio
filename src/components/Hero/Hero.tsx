import React from 'react';
import { MapPin, Phone, Mail, FileText, Code2 } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="section hero animate-fade-up">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Core Persona */}
          <div className="hero-main">
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

          {/* Right Column: Interactive Cyber Console filling the right space */}
          <div className="hero-terminal-wrapper">
            <div className="hero-terminal mono">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">saurabh_profile.sh</span>
                <Code2 size={14} className="terminal-corner-icon text-cyan" />
              </div>
              <div className="terminal-content">
                <div className="code-line">
                  <span className="code-prompt">$</span> <span className="code-cmd">cat</span> <span className="code-arg">system_manifest.json</span>
                </div>
                <div className="code-output">
                  <span className="json-bracket">&#123;</span>
                  <div className="json-indent">
                    <span className="json-key">"engineer"</span>: <span className="json-str">"Saurabh Singh"</span>,
                    <br />
                    <span className="json-key">"role"</span>: <span className="json-str">"Senior Software Engineer"</span>,
                    <br />
                    <span className="json-key">"consulting"</span>: <span className="json-str">"Industrial IoT &amp; AI Systems"</span>,
                    <br />
                    <span className="json-key">"deployments"</span>: <span className="json-val">[</span>
                    <div className="json-indent-2">
                      <span className="json-str">"Shadowfax (DWS)"</span>,
                      <br />
                      <span className="json-str">"Wabtec (Pick-to-Light)"</span>,
                      <br />
                      <span className="json-str">"KAMA Ayurveda (DWS)"</span>,
                      <br />
                      <span className="json-str">"MobCast AI / TTCV2"</span>
                    </div>
                    <span className="json-val">]</span>,
                    <br />
                    <span className="json-key">"production_sites"</span>: <span className="json-val">[</span>
                    <div className="json-indent-2">
                      <span className="json-str">"Mumbai"</span>, <span className="json-str">"Bengaluru"</span>, <span className="json-str">"Kolkata"</span>, <span className="json-str">"Lucknow"</span>, <span className="json-str">"Rohtak"</span>, <span className="json-str">"Gujarat"</span>
                    </div>
                    <span className="json-val">]</span>,
                    <br />
                    <span className="json-key">"stack"</span>: <span className="json-str">"React · Node · Flutter · Python · Gemini"</span>,
                    <br />
                    <span className="json-key">"education"</span>: <span className="json-str">"M.Sc. CS (9.8) · B.Sc. CS (9.6)"</span>,
                    <br />
                    <span className="json-key">"status"</span>: <span className="json-accent">"READY_FOR_ENGAGEMENT"</span>
                  </div>
                  <span className="json-bracket">&#125;</span>
                </div>
                <div className="code-line status-line">
                  <span className="code-prompt">&gt;</span> <span className="code-status text-matrix">STATUS: ALL INDUSTRIAL &amp; AI SERVICES OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
