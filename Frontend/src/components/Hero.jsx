import profile from "../assets/profile.jpeg";
import "./Hero.css";
import resume from "../assets/Monika (Resume).pdf";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const email = "vermamonika3733@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  return (
    <header>
      <div className="hero-container">
        <div className="hero-text">
          <p className="role">Frontend Developer</p>
          <h1>Monika Verma</h1>

          <p>
            Passionate Frontend Developer and MCA student, focused on building
            clean, responsive, and user-friendly web interfaces. Actively
            learning full-stack development to create complete, scalable web
            applications.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn primary">View My Work</a>
            <a
              href={resume}
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/monika-verma-43772033a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Monika1588"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <button
              className="email-copy-btn"
              onClick={copyEmail}
              aria-label="Copy Email"
            >
              <FaEnvelope />
            </button>

            {copied && <span className="copy-msg">Email copied!</span>}
          </div>
        </div>

        <div className="hero-img">
          <img src={profile} alt="Monika Verma" />
          <div className="experience-badge">
            <p>Entry-level</p>
            <span>MCA Student</span>
          </div>
        </div>


        <div
          className="scroll-down"
          onClick={() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          aria-label="Scroll to Bottom"
        >
          <FaChevronDown className="scroll-arrow" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
