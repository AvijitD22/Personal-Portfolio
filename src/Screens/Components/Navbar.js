import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();
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
        <Link
          to="/"
          onClick={closeNavbar}
          style={{
            color: location.pathname === "/" ? "rgb(213, 14, 213)" : "black",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={closeNavbar}
          style={{
            color:
              location.pathname === "/about" ? "rgb(213, 14, 213)" : "black",
          }}
        >
          About
        </Link>
        <Link
          to="/projects"
          onClick={closeNavbar}
          style={{
            color:
              location.pathname === "/projects" ? "rgb(213, 14, 213)" : "black",
          }}
        >
          Projects
        </Link>
        <Link
          to="/blogs"
          onClick={closeNavbar}
          style={{
            color:
              location.pathname === "/blogs" ? "rgb(213, 14, 213)" : "black",
          }}
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          onClick={closeNavbar}
          style={{
            color:
              location.pathname === "/contact" ? "rgb(213, 14, 213)" : "black",
          }}
        >
          Contact
        </Link>
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
