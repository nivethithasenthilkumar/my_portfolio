import React from 'react';
import { educationInfo } from '../../portfolio';
import './Pages.scss';

const AboutPage = () => {
  return (
    <div className="page-wrapper about-page">
      <div className="page-header">
        <span className="section-number">01</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>

      <div className="about-content">
        <div className="about-intro">
          <p className="intro-text">
            I am a dedicated Computer Communication Engineering student with a strong passion 
            for software development and problem-solving. My journey in tech is driven by 
            curiosity and the desire to build meaningful applications.
          </p>
          <p className="intro-text">
            Currently focused on full-stack development, machine learning foundations, 
            and cloud technologies. I believe in continuous learning and applying 
            theoretical knowledge to real-world challenges.
          </p>
        </div>

        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          
          <div className="education-timeline">
            {educationInfo.schools.map((school, index) => (
              <div key={index} className="education-item">
                <div className="edu-marker">
                  <div className="marker-dot" />
                  {index < educationInfo.schools.length - 1 && <div className="marker-line" />}
                </div>
                <div className="edu-content">
                  <div className="edu-duration">{school.duration}</div>
                  <h4 className="edu-title">{school.subHeader}</h4>
                  <p className="edu-school">{school.schoolName}</p>
                  {school.descBullets && school.descBullets[0] && (
                    <span className="edu-highlight">{school.descBullets[0]}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
