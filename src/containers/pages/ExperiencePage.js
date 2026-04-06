import React from 'react';
import { workExperiences } from '../../portfolio';
import './Pages.scss';

const ExperiencePage = () => {
  return (
    <div className="page-wrapper experience-page">
      <div className="page-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="experience-content">
        <div className="experience-list">
          {workExperiences.experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-header">
                <div className="exp-company-info">
                  <div className="exp-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="exp-details">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              
              <p className="exp-description">{exp.desc}</p>
              
              {exp.descBullets && (
                <ul className="exp-bullets">
                  {exp.descBullets.slice(0, 3).map((bullet, i) => (
                    <li key={i} className="exp-bullet">
                      <span className="bullet-marker" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
