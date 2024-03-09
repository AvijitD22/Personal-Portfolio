import React from "react";
import styles from "./AboutSection.module.css";
import about from "../Images/about_section_banner.png";

const AboutSection = () => {
  return (
    <section id="about" className={styles.about_section}>
      <div data-aos="fade-right" data-aos-delay="400">
        <img src={about} alt="" className={styles.about_section_img} />
      </div>
      <div>
        <h2
          className={`${styles.about_heading} heading-font`}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          I'm a Full Stack Web Developer based in India
        </h2>
        <div className={`${styles.about_content} content-font`}>
          <p data-aos="fade-left" data-aos-delay="600">
            Over the past 2+ years, I've worked on various technologies,
            including front-end development, back-end development, Cloud
            Computing and some Devops tools.
          </p>
          <p data-aos="fade-left" data-aos-delay="800">
            These days, I focus on building Full Stack Web Apps using MERN
            Stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
