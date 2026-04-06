import React, {useEffect, useState, useCallback} from "react";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import FloatingBubbles from "../components/FloatingBubbles/FloatingBubbles";
import PageNavigation from "../components/PageNavigation/PageNavigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./Main.scss";

const pages = [
  { id: 0, name: "Home", component: HomePage },
  { id: 1, name: "About", component: AboutPage },
  { id: 2, name: "Skills", component: SkillsPage },
  { id: 3, name: "Experience", component: ExperiencePage },
  { id: 4, name: "Projects", component: ProjectsPage },
  { id: 5, name: "Contact", component: ContactPage },
];

const Main = () => {
  console.log("[v0] Main component rendering");
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  
  console.log("[v0] Current page:", currentPage, "Pages available:", pages.length);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const navigateToPage = useCallback((pageIndex) => {
    if (isAnimating || pageIndex === currentPage) return;
    
    setIsAnimating(true);
    setSlideDirection(pageIndex > currentPage ? 'slide-left' : 'slide-right');
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setSlideDirection(pageIndex > currentPage ? 'slide-in-right' : 'slide-in-left');
      
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 400);
    }, 400);
  }, [currentPage, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentPage < pages.length - 1) {
          navigateToPage(currentPage + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentPage > 0) {
          navigateToPage(currentPage - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, navigateToPage]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="dark-mode portfolio-container">
      <StyleProvider value={{isDark, changeTheme}}>
        <FloatingBubbles />
        
        <PageNavigation 
          pages={pages} 
          currentPage={currentPage} 
          onNavigate={navigateToPage}
        />
        
        <main className={`page-content ${slideDirection}`}>
          <CurrentPageComponent />
        </main>
        
        <div className="page-indicators">
          {pages.map((page, index) => (
            <button
              key={page.id}
              className={`indicator ${index === currentPage ? 'active' : ''}`}
              onClick={() => navigateToPage(index)}
              aria-label={`Go to ${page.name}`}
            />
          ))}
        </div>

        <div className="nav-arrows">
          <button 
            className={`arrow-btn prev ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={() => currentPage > 0 && navigateToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            className={`arrow-btn next ${currentPage === pages.length - 1 ? 'disabled' : ''}`}
            onClick={() => currentPage < pages.length - 1 && navigateToPage(currentPage + 1)}
            disabled={currentPage === pages.length - 1}
            aria-label="Next page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="keyboard-hint">
          Use arrow keys to navigate
        </div>
      </StyleProvider>
    </div>
  );
};

export default Main;
