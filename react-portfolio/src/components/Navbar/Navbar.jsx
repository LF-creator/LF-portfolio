import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      
      document.body.classList.remove("lock-scroll");
    }
    setMenuOpen(false); 
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/LF-portfolio/" onClick={handleLinkClick}>
        Portfolio
      </a>

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
              <a
                href={`#${section}`}
                onClick={handleLinkClick} 
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
