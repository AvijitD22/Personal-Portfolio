import React from "react";
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
    </div>
  );
};

export default Home;
