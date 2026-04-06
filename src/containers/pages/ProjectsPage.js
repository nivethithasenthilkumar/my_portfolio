import React from 'react';
import { achievementSection, certificationSection } from '../../portfolio';
import './Pages.scss';

const ProjectsPage = () => {
  return (
    <div className="page-wrapper projects-page">
      <div className="page-header">
        <span className="section-number">04</span>
        <h2 className="section-title">Achievements</h2>
        <div className="section-line" />
      </div>

      <div className="projects-content">
        <div className="achievements-grid">
          {achievementSection.achievementsCards.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-subtitle">{achievement.subtitle}</p>
              {achievement.footerLink && achievement.footerLink[0]?.url && (
                <a 
                  href={achievement.footerLink[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="cert-list">
            {certificationSection.certifications.slice(0, 6).map((cert, index) => (
              <div key={index} className="cert-item">
                <div className="cert-status">
                  <span className={`status-badge ${cert.status === 'Completed' ? 'completed' : 'progress'}`}>
                    {cert.status}
                  </span>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                </div>
                {cert.footerLink && cert.footerLink[0]?.url && (
                  <a 
                    href={cert.footerLink[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                    aria-label="View certificate"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
