import { useRef } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  const closeNavbar = () => {
    if (navRef.current.classList.contains(styles.responsive_nav)) {
      navRef.current.classList.remove(styles.responsive_nav);
    }
  };

  return (
    <header
      className={`${styles.header} content-font`}
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <h3>ΛVIJIT</h3>
      <nav ref={navRef}>
        <a href="#about" onClick={closeNavbar}>
          About
        </a>
        <a href="#projects" onClick={closeNavbar}>
          Projects
        </a>
        <a href="#blogs" onClick={closeNavbar}>
          Blogs
        </a>
        <a href="#contact" onClick={closeNavbar}>
          Contact
        </a>
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={showNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </nav>
      <button className={styles.nav_btn} onClick={showNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
    </header>
  );
}

export default Navbar;
