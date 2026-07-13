import "./Hero.css";
import resume from "../assets/Monika_Verma_Frontend_Resume.pdf";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";
import { GoLocation } from "react-icons/go";

const Hero = () => {
  const email = "vermamonika3733@gmail.com";
  const [copied, setCopied] = useState(false);
  const [showResumeMenu, setShowResumeMenu] = useState(false);

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
      <div className="hero-container centered">
        <div className="hero-text centered-text">
          <p className="role">Frontend Developer</p>
          <h1>Monika Verma</h1>

          <p className="hero-desc">
            Frontend Developer and MCA student, focused on building clean,
            responsive, and user-friendly web interfaces. Actively learning
            full-stack development to create complete, scalable web applications.
          </p>

          <p className="location">
            <GoLocation /> Haryana, India
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn primary">View My Work</a>
            <details className="resume-dropdown">
  <summary className="btn secondary resume-btn">
    Resume <FaChevronDown className="resume-arrow" />
  </summary>

  <div className="resume-menu">
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      📄 View Resume
    </a>

    <a
      href={resume}
      download="Monika_Verma_Frontend_Resume.pdf"
    >
      ⬇ Download Resume
    </a>
  </div>
</details>
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

  <div className="email-wrapper">
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