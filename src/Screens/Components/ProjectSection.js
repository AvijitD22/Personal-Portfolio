import React from "react";
import styles from "./ProjectSection.module.css";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projectData = [
    {
      Title: "HungryHub",
      Details:
        "A MERN stack Food Delivery App, encompassing essential features like user login, streamlined ordering, and more.",
      Technologies: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
      AnimationDelay: "200",
    },
    {
      Title: "Netflix Clone",
      Details:
        "Implemented user Authentication, seamless login/signup, and access to movie details upon login. Integrated Stripe for subscription plans, allowing users to choose different levels. Utilized Firebase for realtime database functionality, ensuring a responsive user interface.",
      Technologies: ["ReactJs", "Redux", "Firebase", "Stripe"],
      AnimationDelay: "400",
    },
    {
      Title: "Amazon Clone",
      Details:
        "E-Commerce Site for shopping. Users can explore products, add to the cart, and proceed through the checkout process. Firebase Authentication: With the power of Firebase, I've implemented authentication system. Users can sign up and sign in.",
      Technologies: ["ReactJs", "Firebase", "JavaScript", "CSS"],
      AnimationDelay: "600",
    },
    {
      Title: "Texify Elite",
      Details:
        "A simple yet powerful Text Transformation application that can effortlessly manipulate text in various ways, and it comes packed with amazing feature.",
      Technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
      AnimationDelay: "800",
    },
  ];
  return (
    <section id="projects" className={styles.project_container}>
      <h2 className={`heading-font`} data-aos="fade-up">
        Projects
      </h2>
      <div className={styles.project_cards}>
        {projectData.map((data, index) => {
          return (
            <ProjectCard
              key={index}
              Title={data.Title}
              Details={data.Details}
              Technologies={data.Technologies}
              Banner={data.Banner}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
