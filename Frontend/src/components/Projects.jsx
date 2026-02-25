import { useEffect, useRef, useState } from "react";
import "./Projects.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import mernPortfolio from "../assets/mern-portfolio.png";
import reactLogo from "../assets/react-icon.png";

const projects = [
  {
    title: "MERN Portfolio",
    category: ["Full Stack", "MERN"],
    img: mernPortfolio,
    desc: "Full-stack portfolio built using MERN with dynamic projects and contact form.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "https://portfolio1-nu-mauve.vercel.app/",
    github: "https://github.com/Monika1588/Portfolio1",
  },
  {
    title: "Pet Care Website",
    category: ["React", "Frontend"],
    img: project1,
    desc: "Converted Figma design into responsive React website.",
    tech: ["React", "CSS", "Figma"],
    demo: "https://figma-two-blond-57.vercel.app/",
    github: "https://github.com/Monika1588/Figma",
  },
  {
    title: "Hospital Management",
    category: ["Full Stack"],
    img: project2,
    desc: "Full-stack app for managing patients and appointments.",
    tech: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    demo: "https://node-project-4-ks8n.onrender.com",
    github: "https://github.com/Monika1588/Node_project",
  },
  {
    title: "Drum Machine",
    category: ["React"],
    img: project5,
    desc: "Interactive drum machine built with React.",
    tech: ["React", "Hooks", "CSS"],
    demo: "https://drum-machine-five-pied.vercel.app/",
    github: "https://github.com/Monika1588/Drum_Machine",
  },
  {
    title: "Magic Match",
    category: ["React"],
    img: project6,
    desc: "Memory card matching game with React.",
    tech: ["React", "Game Logic", "CSS"],
    demo: "https://magic-match-iota.vercel.app/",
    github: "https://github.com/Monika1588/Node_project",
  },
  {
    title: "Study Planner",
    category: ["JavaScript", "Frontend"],
    img: project4,
    desc: "Productivity tool with timers and progress tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://startling-starlight-26e4dd.netlify.app",
    github: "https://github.com/Monika1588/Study-Planner",
  },
];

const categories = ["All", "React", "JavaScript", "Full Stack", "MERN", "Frontend"];

const Projects = () => {
  const timelineRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const revealElements = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    const rotateIcons = () => {
      const icons = document.querySelectorAll(".floating-icon");
      const scrollY = window.scrollY;
      icons.forEach((icon, i) => {
        const angle = scrollY * 0.2 + i * 60;
        const radius = 150 + i * 20;
        icon.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`;
      });
    };

    window.addEventListener("scroll", revealElements);
    window.addEventListener("scroll", rotateIcons);

    revealElements();
    rotateIcons();

    return () => {
      window.removeEventListener("scroll", revealElements);
      window.removeEventListener("scroll", rotateIcons);
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.join(" ").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      project.category.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="timeline-section">

      {[...Array(6)].map((_, i) => (
        <img key={i} src={reactLogo} alt="React logo" className="floating-icon" />
      ))}

      <h2 className="section-titlee">Projects</h2>

<div className="search-row">

  <div className="project-search">
    <input
      type="text"
      placeholder="Search by title, tech, or keyword..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {searchTerm && (
      <button
        className="clear-search"
        onClick={() => setSearchTerm("")}
        aria-label="Clear search"
      >
        ×
      </button>
    )}
  </div>


</div>

      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="timeline" ref={timelineRef}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="timeline-item reveal">
            <div className="card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.demo} className="btn primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} className="btn secondary" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects match your search.</p>
          <span>Try another keyword.</span>
        </div>
      )}

    </section>
  );
};

export default Projects;