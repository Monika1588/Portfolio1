import { useEffect, useRef, useState } from "react";
import { 
  FaReact, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt 
} from "react-icons/fa";
import { SiMongodb, SiFigma } from "react-icons/si";
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
    { name: "React", icon: <FaReact color="#61DBFB" />, projects: ["Portfolio", "Hospital Appointment management", "Magic Match", "Sound Pad"] },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" />, projects: ["Study Planner", "Leave Mangement", "Sound Pad", "Magic Match"] },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" />, projects: ["Study Planner", "Hospital App", "Leave Mangement System"] },
    { name: "CSS", icon: <FaCss3Alt color="#264DE4" />, projects: ["UI Animations", "Hover Effects", "Grid Designs"] },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" />, projects: ["Hospital Appointment management", "Portfolio", "E-commerce"] },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" />, projects: ["Portfolio", "Hospital Appointment management"] },
    { name: "Git", icon: <FaGitAlt color="#F1502F" />, projects: ["Version Control", "Collab Workflow"] },
    { name: "Figma", icon: <SiFigma color="#F24E1E" />, projects: ["Pet Website", "Plants E-commerce"] },
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
            {skill.icon} {skill.name}
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
