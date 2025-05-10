import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        {menuOpen ? (
          <FaTimes
            className={styles.menuBtnIcon}
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className={styles.menuBtnIcon}
            onClick={() => setMenuOpen(true)}
          />
        )}

        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          {["about", "experience", "projects", "fun"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={() => setMenuOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
