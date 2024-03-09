import React, { useState } from "react";
import styles from "./BlogSection.module.css";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [displayedBlogs, setDisplayedBlogs] = useState(4);

  const blogData = [
    {
      id: 1,
      title: "What is LVM and How To Create LVM Partition in Linux.",
      author: "Avijit Das",
      date: "Jan 16, 2021",
      excerpt:
        "In Linux, Logical Volume Manager (LVM) is a device mapper framework that provides logical volume management for the Linux kernel. Most modern Linux distributions are LVM-aware to the point of being able to have their root file systems on a logical volume.",
      link: "https://medium.com/p/b08972d22bad",
    },
    {
      id: 2,
      title: "What is K-means Clustering and it’s use cases ?",
      author: "Avijit Das",
      date: "Sep 8, 2021",
      excerpt:
        "K-means Clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest , serving as a prototype of the cluster.",
      link: "https://medium.com/p/579e04df66f0",
    },
    {
      id: 3,
      title: "Amazon Simple Queue Service (SQS) and It’s Use Cases.",
      author: "Avijit Das",
      date: "Mar 8, 2021",
      excerpt:
        "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work.",
      link: "https://medium.com/p/79ba72df905f",
    },
    {
      id: 4,
      title: "How to Run Machine Learning code in Docker Container ?",
      author: "Avijit Das",
      date: "May 27, 2021",
      excerpt:
        "Machine learning is the study of computer algorithms that improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence. Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. ",
      link: "https://medium.com/p/47f9cb73afdf",
    },
    {
      id: 5,
      title: "How Game Publishers like Epic Games use AWS ?",
      author: "Avijit Das",
      date: "March 15, 2021",
      excerpt:
        "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide a variety of basic abstract technical infrastructure and distributed computing building blocks and tools.  ",
      link: "https://avijitd22.medium.com/how-game-publishers-like-epic-games-use-aws-10a35a8f6281",
    },
    {
      id: 6,
      title: "What is OpenShift ? and it’s Industry Use Cases",
      author: "Avijit Das",
      date: "Jan 27, 2022",
      excerpt:
        "OpenShift is a family of containerization software products developed by RedHat. Its flagship product is the OpenShift Container Platform :- an On- premises platform as a service built around Docker and CRI-O containers orchestrated and managed by Kubernetes on a foundation of Red Hat Enterprise Linux. ",
      link: "https://medium.com/p/9d5540055139",
    },
    {
      id: 7,
      title: "What is JavaScript ? It’s Industry Use Cases.",
      author: "Avijit Das",
      date: "Jun 15, 2021",
      excerpt:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. ",
      link: "https://medium.com/p/f9ca04c033ce",
    },
    {
      id: 8,
      title: "How MNCs are getting benefits by using AI/ML ?",
      author: "Avijit Das",
      date: "Feb 4, 2022",
      excerpt:
        "AI/ML — short for artificial intelligence (AI) and machine learning (ML) — represents an important evolution in computer science and data processing that is quickly transforming a vast array of industries. ",
      link: "https://medium.com/p/e19a08ebe901",
    },
    {
      id: 9,
      title: "Industry use cases of Azure Kubernetes Service(AKS).",
      author: "Avijit Das",
      date: "March 6, 2021",
      excerpt:
        "Basically Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It provides software as a service, platform as a service and infrastructure as a service and supports many different programming languages, tools, and frameworks, including both Microsoft-specific and third-party software and systems. ",
      link: "https://medium.com/p/48dc376e3088",
    },
    {
      id: 10,
      title: "What is Kubernetes and Which Companies Uses it in IT Industry?",
      author: "Avijit Das",
      date: "Dec 25, 2020",
      excerpt:
        "Kubernetes is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation, letting you run distributed systems resiliently, with scaling and failover for your application. ",
      link: "https://medium.com/p/18f372c1ea5c",
    },
    {
      id: 11,
      title: "What is Jenkins and It’s Industry Use Cases ?",
      author: "Avijit Das",
      date: "Sep 10, 2021",
      excerpt:
        "Jenkins is an open-source Continuous Integration server written in Java for orchestrating a chain of actions to achieve the Continuous Integration process in an automated fashion. Jenkins supports the complete development life cycle of software from building, testing, documenting the software, deploying, and other stages of the software development life cycle. ",
      link: "https://medium.com/p/26250de55c37",
    },
    {
      id: 12,
      title: "What is Neural Network and it’s Industry Use Cases",
      author: "Avijit Das",
      date: "March 4, 2021",
      excerpt:
        "A Neural Network is network of artificial neurons programmed. It is an adaptive system that learns by using interconnected nodes or neurons in a layered structure that resembles a human brain. It is also known as artificial neural network(ANN) or simulated neural network(SNN). ",
      link: "https://medium.com/p/bf81618715fe",
    },
    {
      id: 13,
      title:
        "Cyber Crime Caused due to Confusion Matrix: False Positive ( Type I Error )",
      author: "Avijit Das",
      date: "June 6, 2021",
      excerpt:
        "A confusion matrix is a tabular summary of the number of correct and incorrect predictions made by a classifier. It is used to measure the performance of a classification model. It can be used to evaluate the performance of a classification model through the calculation of performance metrics like accuracy, precision, recall, and F1-score.",
      link: "https://medium.com/p/9ea91bece3c4",
    },
    {
      id: 14,
      title:
        "How big MNC’s like Google, Facebook, Instagram, etc. stores, manages and manipulate Thousands of Terabytes of data with High Speed and High Efficiency ?",
      author: "Avijit Das",
      date: "March 14, 2021",
      excerpt:
        "Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software. Data with many fields offer greater statistical power, while data with higher complexity may lead to a higher false discovery rate. ",
      link: "https://medium.com/p/547b018b1a89",
    },
    {
      id: 15,
      title: "What is Ansible and How it Works ?",
      author: "Avijit Das",
      date: "Jul 27, 2021",
      excerpt:
        "Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows. It is mostly used for configuration management and for provisioning we have more better tools like Terraform. ",
      link: "https://medium.com/p/8a6e8919213f",
    },
  ];

  const loadMoreBlogs = () => {
    setDisplayedBlogs((prev) => prev + 2);
  };

  return (
    <section id="blogs" className={`${styles.blog_section} content-font`}>
      <h2 className="heading-font" data-aos="fade-up" data-aos-delay="200">
        Blogs
      </h2>
      <div className={styles.blog_list}>
        {blogData.slice(0, displayedBlogs).map((blog) => (
          <div
            key={blog.id}
            className={styles.blog_preview}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3>
              <a href={blog.link} target="_blank" rel="noreferrer">
                {blog.title}
              </a>
            </h3>
            <p>
              By {blog.author} on {blog.date}
            </p>
            <p>{blog.excerpt}</p>
          </div>
        ))}
      </div>
      {displayedBlogs < blogData.length && (
        <button
          className={styles.read_more_button}
          onClick={loadMoreBlogs}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default BlogSection;
