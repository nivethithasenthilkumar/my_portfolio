import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// 👉 IMPORT YOUR GIRL GIF
import girlGif from "../../assets/images/girl.gif";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          
          {/* LEFT TEXT SECTION */}
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />

                {/* ✅ DIRECT GOOGLE DRIVE DOWNLOAD */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1AsAmrUxCMxTVjtpsh8tnNxooSV3tFCxF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="greeting-image-div">
            <img
              src={girlGif}
              alt="Woman developer illustration"
              className="girl-gif"
            />
          </div>

        </div>
      </div>
    </Fade>
  );
}
