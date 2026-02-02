import "./Education.css";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  const certifications = [
    { title: "Back End Development and APIs V8", provider: "FreeCodeCamp", date: "Dec 2025", link: "https://freecodecamp.org/certification/fcc-c294ae29-284d-461f-a820-bdb821c1c8a4/back-end-development-and-apis" },
    { title: "Frontend Development Libraries", provider: "FreeCodeCamp", date: "Nov 2025", link: "https://www.freecodecamp.org/certification/fcc-c294ae29-284d-461f-a820-bdb821c1c8a4/front-end-development-libraries" },
    { title: "Responsive Web Design", provider: "FreeCodeCamp", date: "Nov 2025", link: "https://freecodecamp.org/certification/fcc-c294ae29-284d-461f-a820-bdb821c1c8a4/responsive-web-design" },
    { title: "Git", provider: "Simplilearn", date: "Nov 2025", link: "https://certificates.simplicdn.net/share/9414976_96894111763369029367.pdf" },
    { title: "Intro to SQL", provider: "Le Wagon", date: "Nov 2025", link: "https://app.lewagon.school/certificates/rzothrxvk3" },
    { title: "JavaScript for web development", provider: "Board Infinity", date: "Jul 2024", link: "https://drive.google.com/file/d/1twtyVgZxBmLMeDplKxAQrjAfgqorbqEQ/view?usp=drivesdk" },

  ];

  return (
    <section className="education-section" id="education">
      <div className="edu-header">
        <h2>
          Education <span>& Qualifications</span> 
        </h2>
      </div>

      <div className="edu-grid">
        {/* LEFT — Academic */}
        <div className="edu-column">
          <h3 className="column-title">
            <span className="icon"><FaGraduationCap /></span> Academic Background
          </h3>

          <div className="edu-item">
            <span className="year">2025-present</span>
            <h4>Master of Computer Applications (MCA)</h4>
            <p className="college">Lovely Professional University</p>
            <p className="desc">Specialization in Web Development</p>
          </div>

          <div className="edu-item">
            <span className="year">2022-2025</span>
            <h4>Bachelor of Computer Applications (BCA)</h4>
            <p className="college">Lovely Professional University</p>
            <p className="desc">Grade: 8.67</p>
          </div>

          <div className="edu-item">
            <span className="year">April 2020-March 2021</span>
            <h4>Intermediate (Non-Medical)</h4>
            <p className="college">Government Senior Secondary School</p>
            <p className="desc">Percentage: 96%</p>
          </div>

          <div className="edu-item">
            <span className="year">April 2018-March 2019</span>
            <h4>Matriculation</h4>
            <p className="college">Saint Nischal Senior Secondary School</p>
            <p className="desc">Percentage: 90.6%</p>
          </div>
        </div>

        {/* RIGHT — Certifications */}
        <div className="edu-column">
          <h3 className="column-title">
            <span className="icon"><FaCertificate /></span> Certifications
          </h3>

          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <h4>
                  {cert.title}{" "}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-link"
                    title="View Certificate"
           
                  >
                    <FaExternalLinkAlt />
                  </a>
                </h4>
                <p>{cert.provider} <span>{cert.date}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
