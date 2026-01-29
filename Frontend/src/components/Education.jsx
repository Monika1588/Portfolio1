import "./Education.css";

const Education = () => {
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
            <span className="icon">🎓</span> Academic Background    
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

        {/* RIGHT  Certifications */}
        <div className="edu-column">
          <h3 className="column-title">
            <span className="icon">🙌</span> Certifications
          </h3>

          <div className="cert-grid">
            <div className="cert-card">
              <h4>Back End Development and APIs V8</h4>
              <p>FreeCodeCamp <span>Dec 2025</span></p>
            </div>

            <div className="cert-card">
              <h4>Frontend Development Libraries</h4>
              <p>FreeCodeCamp <span>Nov 2025</span></p>
            </div>

            <div className="cert-card">
              <h4>Responsive Web Design</h4>
              <p>FreeCodeCamp <span>Nov 2025</span></p>
            </div>

            <div className="cert-card">
              <h4>Git</h4>
              <p>Simplilearn <span>Nov 2025</span></p>
            </div>

            <div className="cert-card">
              <h4>Intro to SQL</h4>
              <p>Le Wagon <span>Nov 2025</span></p>
            </div>

            <div className="cert-card">
              <h4>JavaScript for web development</h4>
              <p>Board Infinity <span>Jul 2024</span></p>
            </div>

            <div className="cert-card">
              <h4>HTML, CSS, JavaScript</h4>
              <p>Coursera <span>Jul 2023</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
