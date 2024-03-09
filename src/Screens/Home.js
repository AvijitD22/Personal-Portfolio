import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import HeadingSection from "./Components/HeadingSection";
import AboutSection from "./Components/AboutSection";
import ToolsAndTechnologiesSection from "./Components/ToolsAndTechnologiesSection";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";
import BlogSection from "./Components/BlogSection";
import FooterSection from "./Components/FooterSection";
import styles from "./Home.module.css";

const Home = () => {
  const [show, setShow] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  return (
    <div className={styles.home}>
      <Navbar />
      <HeadingSection />
      <AboutSection />
      <ToolsAndTechnologiesSection />
      <ProjectSection />
      <ContactSection />
      <BlogSection />
      <FooterSection />
      {show ? (
        <a href="#heading">
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className={styles.to_top}
          >
            ^
          </button>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
