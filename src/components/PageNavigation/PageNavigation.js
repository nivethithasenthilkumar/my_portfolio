import React from 'react';
import './PageNavigation.scss';

const PageNavigation = ({ pages, currentPage, onNavigate }) => {
  return (
    <nav className="page-navigation">
      <div className="nav-logo">
        <span className="logo-text">NK</span>
      </div>
      
      <ul className="nav-links">
        {pages.map((page, index) => (
          <li key={page.id}>
            <button
              className={`nav-link ${index === currentPage ? 'active' : ''}`}
              onClick={() => onNavigate(index)}
            >
              <span className="link-text">{page.name}</span>
              <span className="link-indicator" />
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="status-dot" />
        <span className="status-text">Available for work</span>
      </div>
    </nav>
  );
};

export default PageNavigation;
