import React from "react";
import styles from "./ContactForm.module.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvnwvlw");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="email" data-aos="fade-left" data-aos-delay="200">
        Email Address:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        data-aos="fade-left"
        data-aos-delay="300"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" data-aos="fade-left" data-aos-delay="400">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        data-aos="fade-left"
        data-aos-delay="500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        data-aos="fade-left"
        data-aos-delay="600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
