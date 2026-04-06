import React from 'react';
import { skillsSection, techStack } from '../../portfolio';
import './Pages.scss';

const SkillsPage = () => {
  return (
    <div className="page-wrapper skills-page">
      <div className="page-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>

      <div className="skills-content">
        <div className="skills-intro">
          <h3 className="skills-headline">{skillsSection.title}</h3>
          <p className="skills-subtext">{skillsSection.subTitle}</p>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h4 className="category-title">Technical Skills</h4>
            <div className="skill-bars">
              {techStack.experience.slice(0, 6).map((skill, index) => (
                <div key={index} className="skill-bar-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.Stack}</span>
                    <span className="skill-percent">{skill.progressPercentage}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: skill.progressPercentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Technologies</h4>
            <div className="tech-icons">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div key={index} className="tech-item">
                  <i className={skill.fontAwesomeClassname}></i>
                  <span className="tech-name">{skill.skillName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-highlights">
          {skillsSection.skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                </svg>
              </span>
              <span className="highlight-text">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
