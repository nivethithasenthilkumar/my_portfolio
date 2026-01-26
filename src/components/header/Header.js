import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  certificationSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  const viewSkills = skillsSection.display;
  const viewExperience = workExperiences.display;
  const viewAchievement = achievementSection.display;
  const viewCertification = certificationSection.display;

  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span
            className={isDark ? "navicon navicon-dark" : "navicon"}
          ></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}

          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}{viewCertification && (
  <li>
    <a href="#certifications">Certifications</a>
  </li>
)}



          {viewResume && (
            <li>
              <a href="#greeting">Resume</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact</a>
          </li>

         <li>
  <button className="theme-toggle-btn">
    <ToggleSwitch />
  </button>
</li>

        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
