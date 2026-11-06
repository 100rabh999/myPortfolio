import React, { useEffect, useRef } from 'react';
import { educations } from '../../data/education';
import { GraduationCap, Award, Calendar, School } from 'lucide-react';
import './Education.css';

export const Education: React.FC = () => {
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
    <section id="education" className="section education-section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title mono reveal">Education &amp; Qualifications</h2>
        
        <div className="education-grid">
          {educations.map((item, index) => (
            <div key={item.id} className="education-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="education-card-header">
                <div className="education-icon-wrapper">
                  <GraduationCap size={22} className="education-icon" />
                </div>
                <div className="education-grade-pill mono">
                  <Award size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.grade}
                </div>
              </div>

              <h3 className="education-degree">{item.degree}</h3>
              
              <div className="education-meta mono">
                <span className="education-institution">
                  <School size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  {item.institution}
                </span>
                <span className="education-period">
                  <Calendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  {item.period}
                </span>
              </div>

              {item.details && (
                <p className="education-details">{item.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

