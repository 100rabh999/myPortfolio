import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

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

    // Basic vulgarity check (high-level)
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
      // NOTE: For a static site (Firebase Hosting), you can use a free service like Web3Forms or Formspree 
      // to send emails directly to your Gmail without needing a backend.
      // 1. Get an access key from https://web3forms.com
      // 2. Replace 'YOUR_ACCESS_KEY_HERE' below with your actual key.

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e5169efc-cb20-4812-9033-660c81e6168c', // <-- Replace this
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // If the key is not set, we'll gracefully fallback to mailto for now
        window.location.href = `mailto:contact@saurabhsingh2001.sk@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0A%0AReply to: ${formData.email})`;
        setStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to mailto
      window.location.href = `mailto:contact@saurabhsingh2001.sk@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={containerRef}>
      <div className="container contact-container reveal">
        <div className="contact-header">
          <h2 className="section-title mono">Get In Touch</h2>
          <p className="contact-subtitle">
            Whether you're building a web application, mobile product, AI system, SaaS platform, or something completely new, let's talk.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {errorMessage && (
              <p className="status-message error">{errorMessage}</p>
            )}

            {status === 'success' && (
              <p className="status-message success">Thank you for contacting! We will contact you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
