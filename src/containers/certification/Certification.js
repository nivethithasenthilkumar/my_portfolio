import React from "react";
import "./Certification.scss";
import { Fade } from "react-reveal";
import { certificationSection } from "../../portfolio";

export default function Certification() {
  if (!certificationSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="certification-main" id="certifications">
        <h1 className="achievement-heading">
          {certificationSection.title}
        </h1>

        <p className="achievement-subtitle subTitle">
          {certificationSection.subtitle}
        </p>

        <div className="certification-grid">
          {certificationSection.certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              {/* Logo */}
              <img
                src={cert.logo}
                alt={cert.title}
                className="certification-logo"
              />

              {/* Title */}
              <h3 className="certification-title">
                {cert.title}
              </h3>

              {/* Subtitle */}
              <p className="certification-subtitle">
                {cert.subtitle}
              </p>

              {/* Status */}
              <span
                className={
                  cert.status === "In Progress"
                    ? "cert-status progress"
                    : "cert-status completed"
                }
              >
                {cert.status}
              </span>

              {/* View Certificate Button */}
              {cert.footerLink && cert.footerLink.length > 0 && (
                <div className="certification-links">
                  {cert.footerLink.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-view-btn"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
