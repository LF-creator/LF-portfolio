import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { useState } from "react";


export const Experience = () => {
  const [hoveredSkills, setHoveredSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const isHighlighted = hoveredSkills.includes(skill.title);
            return (
              <div
                key={id}
                className={`${styles.skill} ${isHighlighted ? styles.glow : ""}`} 
                onMouseEnter={() => setHoveredSkill(skill.title)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((item, id) => (
            <li
  key={id}
  className={`${styles.historyItem} ${
    hoveredSkill && item.skills?.includes(hoveredSkill) ? styles.glow : ""
  }`}
  onMouseEnter={() => setHoveredSkills(item.skills || [])}
  onMouseLeave={() => setHoveredSkills([])}
>
              <img src={item.imageSrc} alt={item.title} />
              <div className={styles.historyItemDetails}>
                <h3>{`${item.role}, ${item.organisation}`}</h3>
                <p>{`${item.startDate} - ${item.endDate}`}</p>
                <ul>
                  {item.experiences.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};