import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  // Split skills: 7 left, rest right
  const leftSkills = techStack.experience.slice(0, 7);
  const rightSkills = techStack.experience.slice(7);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">

        {/* LEFT COLUMN */}
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>

          {leftSkills.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };

            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="skills-right">

          {/* IMAGE */}
          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>

          {/* RIGHT-SIDE SKILLS (BELOW IMAGE) */}
          <div className="skills-bar-right">
            {rightSkills.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };

              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </Fade>
  );
}
