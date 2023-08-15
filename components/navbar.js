import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeChanger from "../components/theme";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        Digital Public Goods
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScyfaoo3x7GK1vru1c-8e_xN3cPTfXqjeKC1yyLB4q06oJGFA/viewform"
              target="_blank"
            >
              Add Projects
            </a>
          </li>
          {/* <li className={styles.navItem}>
            <ThemeChanger />
          </li> */}
          {/* <li className={styles.navItem}>
            <Link href="/projects">Projects</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
