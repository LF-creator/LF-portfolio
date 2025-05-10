import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  const [showCard, setShowCard] = useState(false);

  const handleContactClick = () => {
    setShowCard(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
  if (showCard) {
    document.body.classList.add("lock-scroll");
  } else {
    document.body.classList.remove("lock-scroll");
  }

  return () => {
    document.body.classList.remove("lock-scroll");
  };
}, [showCard]);

  return (
    <section className={styles.container}>
    <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to my world!</h1>
        <p className={styles.description}>
           My name is Linar // Frontend developer.
        </p>
        <button className={styles.contactBtn} onClick={handleContactClick}>Contact</button>

        {showCard && (
          <div className={styles.cardOverlay} onClick={() => setShowCard(false)}>
            <div className={styles.contactCard} onClick={(e) => e.stopPropagation()}>
              <h2>Contact Me</h2>
              <p>Email: Linarfatkullin1996@gmail.com</p>
              <p className={styles.typingText}>📍 Sweden, Stockholm</p>
              <p className={styles.typingText}>Let’s build something awesome together.</p>

              <div className={styles.iconRow}>
                <a href="https://github.com/LF-creator" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/linar-fatkullin-1419a8183/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <img src={heroImage} alt="hero img of me" className={styles.heroImg} />

      
    </section>
  );
};