import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience} from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Fun } from "./components/Fun/Fun"

function App() {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const opacity = Math.min(scrollY / maxScroll, 0.6);
      setOverlayOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.App}>
      {/* Background overlay behind everything */}
      <div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Page content in front */}
      <div className={styles.content}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Fun/>
      </div>
    </div>
  );
}

export default App;