// BlogSection.js

import React from "react";
import styles from "./BlogSection.module.css";
import { Link } from "react-router-dom";

const BlogSection = () => {
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
  ];

  return (
    <section className={`${styles.blog_section} content-font`}>
      <h2 className="heading-font" data-aos="fade-up" data-aos-delay="200">
        Blogs
      </h2>
      <div className={styles.blog_list}>
        {blogData.map((blog) => (
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
      <Link to="/blogs">
        <button
          className={styles.read_more_button}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Read More
        </button>
      </Link>
    </section>
  );
};

export default BlogSection;
