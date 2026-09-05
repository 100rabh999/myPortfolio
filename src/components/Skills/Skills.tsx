import React, { useEffect, useRef } from 'react';
import { skills } from '../../data/skills';
import './Skills.css';

export const Skills: React.FC = () => {
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
    <section id="skills" className="section skills-section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title mono reveal">Technical Skills</h2>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={category.id} className="skill-category reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="skill-title mono">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
