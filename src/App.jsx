import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Internship />
      <Certifications />
      <Skills />
      <Languages />
       <Resume/>
      <Contact />
     
    </div>
  );
}
