import React from "react";
import styles from "./Heading.module.css";

const HeadingSection = () => {
  return (
    <div className={`${styles.heading_container} heading-font`} id="heading">
      <div className={styles.heading_title}>
        <h1 data-aos="fade-up-right" data-aos-delay="400">
          HEY THERE, I'M AVIJIT DAS
        </h1>
        <h1 data-aos="fade-up-right" data-aos-delay="800">
          {"< TURNING COFFEE INTO CODE. />"}
        </h1>
        <p data-aos="fade-up-right" data-aos-delay="1200">
          Full Stack Web Developer
        </p>
      </div>
      <div
        className={styles.code_symbol}
        data-aos="flip-right"
        data-aos-delay="400"
      >
        <span>{"</>"}</span>
      </div>
    </div>
  );
};

export default HeadingSection;
