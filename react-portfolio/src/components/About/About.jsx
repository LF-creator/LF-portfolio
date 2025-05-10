import React, { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
import cursorImage from "../../assets/about/cursorImage.png";
import music from "../../assets/about/music.png";
import camera1 from "../../assets/about/camera1.png";
import hobby1 from "../../assets/about/hobby1.png";
import hobby2 from "../../assets/about/hobby2.png";
import hobby3 from "../../assets/about/hobby3.png";
import { FaGithub, FaSoundcloud, FaPinterest } from 'react-icons/fa';

export const About = () => {
  const hobbies = [
    {
      image: hobby2,
      info: "https://se.pinterest.com/ImLFcreator/_profile/_created/",
      platform: "Pinterest"
    },
    {
      image: hobby1,
      info: "https://github.com/LF-creator" ,
      platform: "Github",

    },
    {
      image: hobby3,
      info: "https://soundcloud.com/linar-ft",
      platform: "Soundcloud"
      
    },
  ];

  const iconMap = {
    SoundCloud: <FaSoundcloud />,
    Pinterest: <FaPinterest />,
    Github: <FaGithub/>
  };

  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo((prev) => !prev);

  const handleImageChange = (direction) => {
    setFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => {
        if (direction === "next") return (prev + 1) % hobbies.length;
        if (direction === "prev") return prev === 0 ? hobbies.length - 1 : prev - 1;
      });
      setFading(false);
      setShowInfo(false); 
    }, 300);
  };

  // Fade-in on scroll logic
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTextVisible(true);
        } else {
          setIsVisible(false);
          setTextVisible(false);
        }
      },
      { threshold: 0.3 }
    );
  
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}` } id="about"
    >
      <h2 className={styles.titleA}>About</h2>
      <div className={styles.content}>
        <div className={styles.carousel}>
          <button
            onClick={() => handleImageChange("prev")}
            className={styles.carouselBtn}
          >
            ‹
          </button>

          <div className={styles.imageWrapper}>
            <img
              src={hobbies[currentImageIndex].image}
              alt="Hobby image"
              className={`${styles.aboutImage} ${fading ? styles.fadeOut : ""}`}
            />
            <div className={styles.infoContainer}>
              <button onClick={toggleInfo} className={styles.infoBtn}>
                ℹ️
              </button>
              {showInfo && (
  <div className={styles.infoBox}>
    <a
      href={hobbies[currentImageIndex].info}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkIcon}
    >
      {iconMap[hobbies[currentImageIndex].platform] || "🌐"}
    </a>
  </div>
)}
            </div>
          </div>

          <button
            onClick={() => handleImageChange("next")}
            className={styles.carouselBtn}
          >
            ›
          </button>
        </div>

        <ul className={styles.aboutItems}>
        <li
  className={styles.aboutItem}
  onMouseEnter={() => {
    setFading(true);
    setTimeout(() => {
      setCurrentImageIndex(1); 
      setFading(false);
    }, 300);
  }}
>
  <img className={styles.aboutImg} src={cursorImage} alt="Cursor icon" />
  <div
    ref={textRef}
    className={`${styles.slideInText} ${textVisible ? styles.slideVisible : ""}`}
  >
    <h3 className={styles.title}>Frontend Developer</h3>
    <p className={styles.description}>
    I enjoy building things that feel smooth to use and easy to understand. Most of my work is done in React, TypeScript, JavaScript, and CSS. I like when small details make a big difference in how something feels to use.
</p>
  </div>
</li>
   <li
  className={styles.aboutItem}
  onMouseEnter={() => {
    setFading(true);
    setTimeout(() => {
      setCurrentImageIndex(0); 
      setFading(false);
    }, 300);
  }}
>
  <img className={styles.aboutImg} src={camera1} alt="Camera icon" />
  <div
    ref={textRef}
    className={`${styles.slideInText} ${textVisible ? styles.slideVisible : ""}`}
  >
    <h3 className={styles.title} >Photography/Editing</h3>
    <p className={styles.description}>
    I often bring my camera when I’m out and about, especially if I have a visual idea I want to try. I like editing too—it’s where I shape the mood and make things click together.
    </p>
  </div>
</li>
  <li
  className={styles.aboutItem}
  onMouseEnter={() => {
    setFading(true);
    setTimeout(() => {
      setCurrentImageIndex(2); // frontend index
      setFading(false);
    }, 300);
  }}
>
  <img className={styles.aboutImg} src={music} alt="Music icon" />
  <div
    ref={textRef}
    className={`${styles.slideInText} ${textVisible ? styles.slideVisible : ""}`}
  >
    <h3 className={styles.title}>Producing/Songwriting</h3>
    <p className={styles.description}>
    I make music in my free time, mostly pop and house. Sometimes it’s just for fun, other times I dive deeper into writing lyrics and building a track from scratch.
    </p>
  </div>
</li>
      
        </ul>
        <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
      </div>
    </section>
  );
};
