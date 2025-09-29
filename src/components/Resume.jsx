import React from 'react'
import "./resume.css";

function Resume() {
  return (
    <section className="section" id="resume">

      <h2>My Resume</h2>
      <p className="resume-text">
        Here’s my professional journey, showcasing my skills, experience, and achievements as a Java developer. Download my resume to explore my career path and technical expertise in detail. You can download it by clicking the button below.
      </p>
      <a
        href="/Yogiraj_Nimbalkar_Resume.pdf" // This is the path to your resume file in the public folder
        download="Yogiraj_Nimbalkar_Resume"   // This attribute triggers the download and specifies the filename
        className="download-btn"
      >
        <button className="btn">Download Resume</button>
      </a>

    </section>
  )
}

export default Resume
