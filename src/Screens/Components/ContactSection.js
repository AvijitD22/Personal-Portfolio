import React from "react";
import styles from "./ContactSection.module.css";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact" className={`${styles.contact_container} content-font`}>
      <div className={styles.mail}>
        <h3 className="heading-font" data-aos="fade-right" data-aos-delay="200">
          Got a Problem?
        </h3>
        <h4 className="heading-font" data-aos="fade-right" data-aos-delay="400">
          Let's Talk
        </h4>
        <a
          href="mailto:avijitd22@yahoo.com"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          ✉ avijitd22@yahoo.com
        </a>
      </div>
      <div className={styles.contact_form} data-aos="fade-left">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
