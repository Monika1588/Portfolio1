import { useEffect, useState } from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "monika.verma@example.com";

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <h2>Monika Verma</h2>
            <p>
              Frontend Developer focused on crafting clean, scalable
              web applications.
            </p>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/Monika1588" target="_blank" rel="noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/monika-verma-43772033a" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} />
              </a>

              <button className="email-btn" onClick={copyEmail} title="Click to copy email">
                <FaEnvelope size={24} />
                {copied && <span className="copy-msg">Email copied!</span>}
              </button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Monika Verma. All rights reserved.
        </div>
      </footer>

      {showTop && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
