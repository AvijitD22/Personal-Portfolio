import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div
      className={`${styles.project_card} content-font`}
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <h3 className="heading-font">{props.Title}</h3>
      <p>{props.Details}</p>
      <div className={styles.tech_button}>
        {props.Technologies?.map((tech, index) => {
          return <button key={index}>{tech}</button>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
