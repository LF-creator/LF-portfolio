const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

app.use(cors()); // This allows all origins by default

const jokes = [
    { setup: "Why don’t programmers like nature?", delivery: "It has too many bugs." },
    { setup: "Why did the developer go broke?", delivery: "Because he used up all his cache." },
    { setup: "What’s a programmer’s favorite hangout place?", delivery: "The Foo Bar." },
    { setup: "Why do Java developers wear glasses?", delivery: "Because they don’t C#." },
    { setup: "Why was the JavaScript file lonely?", delivery: "Because it didn’t know how to ‘join’ anything." },
    { setup: "Why did the frontend developer get kicked out of school?", delivery: "Because they kept getting caught with class." },
    { setup: "Why did the function cross the road?", delivery: "To return to the other side." },
    { setup: "What's a programmer's favorite type of music?", delivery: "Algo-rhythm." },
    { setup: "Why do programmers always mix up Christmas and Halloween?", delivery: "Because Oct 31 == Dec 25." },
    { setup: "How many programmers does it take to change a light bulb?", delivery: "None. It's a hardware problem." },
    { setup: "Why don’t skeletons fight each other?", delivery: "They don’t have the guts." },
    { setup: "Why can't you trust an atom?", delivery: "Because they make up everything." },
    { setup: "What do you call fake spaghetti?", delivery: "An impasta." },
    { setup: "Why did the scarecrow win an award?", delivery: "Because he was outstanding in his field." },
    { setup: "I used to play piano by ear...", delivery: "But now I use my hands." },
    { setup: "Why did the math book look sad?", delivery: "Because it had too many problems." },
    { setup: "Why are elevator jokes so good?", delivery: "They work on many levels." },
    { setup: "Did you hear about the restaurant on the moon?", delivery: "Great food, no atmosphere." },
    { setup: "Why did the bicycle fall over?", delivery: "It was two-tired." },
    { setup: "Parallel lines have so much in common...", delivery: "It’s a shame they’ll never meet." },
  ];

app.get('/api/joke', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});