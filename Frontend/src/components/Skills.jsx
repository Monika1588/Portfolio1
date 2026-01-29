import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  const skillsData = [
    { name: "⚛ React", projects: ["Portfolio", "Hospital Appointment management", "Magic Match", "Drum Machine"] },
    { name: "📜 JavaScript", projects: ["Study Planner", "Leave Mangement", "Drum Machine", "Magic Match"] },
    { name: "🌐 HTML", projects: ["Study Planner", "Hospital App", "Leave Mangement System"] },
    { name: "🎨 CSS", projects: ["UI Animations", "Hover Effects", "Grid Designs"] },
    { name: "🟢 Node.js", projects: ["Hospital Appointment management", "Portfolio", "E-commerce"] },
    { name: "🍃 MongoDB", projects: ["Portfolio", "Hospital Appointment management"] },
    { name: "🐙 Git", projects: ["Version Control", "Collab Workflow"] },
    { name: "🎯 Figma", projects: ["Pet Website", "Plants E-commerce"] },
  ];

  const directions = ["from-left", "from-right", "from-top", "from-bottom"];

  return (
    <section id="skills" className="skills-pro" ref={ref}>
      <h2>Skills</h2>
      <div className="skills-wrapper">
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className={`skill pro ${directions[idx % directions.length]}`}
            onMouseEnter={() => setHoveredSkill(idx)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {skill.name}
            <div className={`project-bubbles ${hoveredSkill === idx ? "active" : ""}`}>
              {skill.projects.map((proj, i) => (
                <span key={i} className="bubble">{proj}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
