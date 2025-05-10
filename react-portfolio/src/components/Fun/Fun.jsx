import React, { useState, useEffect } from "react";
import styles from "../Fun/Fun.module.css";

export const Fun = () => {
  const [displayedJoke, setDisplayedJoke] = useState("");
  const [fullJoke, setFullJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/joke");
      const data = await response.json();
      const joke = `${data.setup} ${data.delivery}`;
      animateJoke(joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setDisplayedJoke("Oops! Couldn't fetch a joke.");
      setLoading(false);
    }
  };

  const animateJoke = (text) => {
    setFullJoke(text);
    let frame = 0;

    const scramble = () => {
      const output = text
        .split("")
        .map((char, i) => {
          if (i < frame) return char;
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplayedJoke(output);

      if (frame <= text.length) {
        frame++;
        requestAnimationFrame(scramble);
      } else {
        setLoading(false);
      }
    };

    scramble();
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={styles.funContainer} id="fun">
      <h2 className={styles.title}>If you had a bad day, this might cheer you up!</h2>
      <div className={styles.jokeCard}>
        <p className={styles.jokeText}>{displayedJoke}</p>
      </div>
      <button onClick={fetchJoke}>🔁 Get Another Joke</button>
    </div>
  );
};