import React, { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts.js";
import { useCatImage } from "./hooks/useCatImage.js";
import "./App.css";

export default function App() {
  const [fact, setFact] = useState();
  const { img } = useCatImage({ fact });

  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const handleClick = () => {
    getRandomFact().then(setFact);
  };

  return (
    <main>
      {fact && <p>{fact}</p>}
      <button onClick={handleClick}>Refresh</button>
      {img && <img src={img} alt={`cats img`} />}
    </main>
  );
}
