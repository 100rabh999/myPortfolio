import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import './Contact.css';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateForm = () => {
    const { name, message } = formData;
    
    // Check for garbage / repeated chars (e.g. aaaaa)
    const repeatingChars = /(.)\1{4,}/;
    if (repeatingChars.test(name) || repeatingChars.test(message)) {
      return "Please enter valid text without excessive repeating characters.";
    }

    if (message.trim().length < 10) {
      return "Message is too short. Please provide more details.";
    }

    // Basic vulgarity check
    const vulgarWords = ['fuck', 'shit', 'bitch', 'asshole', 'cunt', 'dick', 'pussy', 'bastard', 'slut', 'whore', 'crap'];
    const lowerMessage = message.toLowerCase();
    const lowerName = name.toLowerCase();
    
    const containsVulgar = vulgarWords.some(word => 
      lowerMessage.includes(word) || lowerName.includes(word)
    );

    if (containsVulgar) {
      return "Please keep the language professional.";
    }

    return null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e5169efc-cb20-4812-9033-660c81e6168c',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        window.location.href = `mailto:saurabhsingh2001.sk@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0A%0AReply to: ${formData.email})`;
        setStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      window.location.href = `mailto:saurabhsingh2001.sk@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={containerRef}>
      <div className="container contact-container reveal">
        <div className="contact-header">
          <h2 className="section-title mono">Get In Touch</h2>
          <p className="contact-subtitle">
            Whether you're building a web application, mobile product, AI system, industrial automation, or enterprise software, let's talk.
          </p>
        </div>

        <div className="contact-layout">
          {/* Direct Details Card */}
          <div className="contact-details-card">
            <h3 className="details-heading mono">
              <MessageSquare size={18} className="text-cyan" style={{ display: 'inline', marginRight: '8px' }} />
              Direct Communication
            </h3>
            <p className="details-intro">
              Available for senior engineering roles, technical architecture consultation, and high-impact software engagements.
            </p>

            <div className="contact-info-list">
              <a href="tel:+917058107207" className="contact-info-item">
                <div className="info-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="info-label mono">Phone / WhatsApp</span>
                  <span className="info-value">+91 70581 07207</span>
                </div>
              </a>

              <a href="mailto:saurabhsingh2001.sk@gmail.com" className="contact-info-item">
                <div className="info-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="info-label mono">Email</span>
                  <span className="info-value">saurabhsingh2001.sk@gmail.com</span>
                </div>
              </a>

              <div className="contact-info-item static-item">
                <div className="info-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-label mono">Location</span>
                  <span className="info-value">Maharashtra, India</span>
                </div>
              </div>

              <div className="social-links-row">
                <a 
                  href="https://github.com/100rabh999" 
                  className="social-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/saurabh-singh-59b323241/" 
                  className="social-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="mono">&gt;_ Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Sharma"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="mono">&gt;_ Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="mono">&gt;_ Project Details / Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or engineering goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'submitting'}
              >
                <Send size={16} style={{ marginRight: '8px', display: 'inline' }} />
                {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
              </button>

              {errorMessage && (
                <p className="status-message error mono">{errorMessage}</p>
              )}

              {status === 'success' && (
                <p className="status-message success mono">
                  &gt;_ Message received successfully! I will get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
