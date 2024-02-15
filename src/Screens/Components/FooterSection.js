import React from "react";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";
import email from "../Images/email.svg";
import medium from "../Images/medium.svg";

import styles from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <div className={`${styles.footer_container} content-font`}>
      <p data-aos="fade-up">© 2024 Avijit Das</p>
      <div className={styles.get_in_touch}>
        <p data-aos="fade-up" data-aos-delay="200">
          Need Full Stack Web Developer ?
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          Let's Talk
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          className={styles.contact_section}
        >
          <a href="#contact">Get In Touch</a>
        </button>
      </div>
      <div className={styles.footer_contacts}>
        <a
          href="https://www.linkedin.com/in/avijitd22/"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          href="https://github.com/avijitd22"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src={github} alt="" />
        </a>
        <a
          href="mailto:avijitd22@yahoo.com"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={email} alt="" />
        </a>
        <a
          href="https://avijitd22.medium.com/"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img src={medium} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
