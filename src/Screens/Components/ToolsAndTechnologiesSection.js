import React from "react";
import styles from "./ToolsAndTechnologiesSection.module.css";
import react from "../Images/react.svg";
import node from "../Images/node.svg";
import express from "../Images/express.svg";
import mongodb from "../Images/mongodb.svg";
import git from "../Images/git.svg";
import github from "../Images/github.svg";
import bootstrap from "../Images/bootstrap.svg";
import python from "../Images/python.svg";
import aws from "../Images/aws.svg";
import linux from "../Images/linux.svg";
import docker from "../Images/docker.svg";

const ToolsAndTechnologiesSection = () => {
  return (
    <div className={styles.tools_container}>
      <h2 className={`heading-font`} data-aos="fade-up" data-aos-delay="300">
        Tools and Technologies
      </h2>
      <div className={styles.all_tools}>
        <img src={mongodb} alt="" data-aos="fade-right" data-aos-delay="1000" />
        <img src={express} alt="" data-aos="fade-right" data-aos-delay="800" />
        <img src={react} alt="" data-aos="fade-right" data-aos-delay="600" />
        <img src={node} alt="" data-aos="fade-right" data-aos-delay="400" />
        <img src={git} alt="" data-aos="fade-right" data-aos-delay="200" />
        <img src={github} alt="" data-aos="fade-down" data-aos-delay="100" />
        <img src={bootstrap} alt="" data-aos="fade-left" data-aos-delay="200" />
        <img src={python} alt="" data-aos="fade-left" data-aos-delay="400" />
        <img src={aws} alt="" data-aos="fade-left" data-aos-delay="600" />
        <img src={linux} alt="" data-aos="fade-left" data-aos-delay="800" />
        <img src={docker} alt="" data-aos="fade-left" data-aos-delay="1000" />
      </div>
    </div>
  );
};

export default ToolsAndTechnologiesSection;
