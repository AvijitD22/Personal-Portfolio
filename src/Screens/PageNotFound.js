import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      navigate("/");
    }
  }, [counter, navigate]);

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles["page-not-found-container"]}>
      <div className={styles["error-container"]}>
        <h1 className={styles["error-message"]}>404 - Page Not Found</h1>
        <p className={styles["error-description"]}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button className={styles["redirect-button"]} onClick={redirectToHome}>
          Go to Home
        </button>
        <p className={styles["redirect-timer"]}>
          Redirecting to home page in {counter} seconds...
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
