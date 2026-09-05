import React, { useEffect, useRef } from 'react';
import './About.css';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="section about-section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title mono reveal">About & Philosophy</h2>
        
        <div className="about-content reveal">
          <p className="lead-text">Building software from idea to production.</p>
          
          <div className="text-body">
            <p>
              My work spans full-stack development, AI/GenAI, backend engineering, mobile applications, real-time systems, automation, and SaaS products. I enjoy solving complex engineering problems and turning them into reliable, intuitive products.
            </p>
            
            <blockquote className="philosophy-quote">
              "Understand the problem → design the system → build the product → optimize → ship."
            </blockquote>
            
            <h3 className="sub-heading">AI Engineering Philosophy</h3>
            <p>
              I focus on applying AI where it can genuinely improve a workflow. My AI work revolves around: <strong>Context → Intelligence → Tools → Structured Output → Product</strong>. I integrate LLMs into real products rather than treating AI as an isolated feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
