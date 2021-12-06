import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": " Smiley Face",
  "👻": " Ghost",
  "✌️": "Peace",
  "😎": "Cool",
  "😂": "Laughing",
  "🤣": "ROFL"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have  this in our emoji dictionary ";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outttt!!!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning}</h2>

      <div>"😀", "👻", "✌️", "😎", "😂", "🤣" </div>

      <p>
        <strong> THE EMOJI DICTIONARY</strong>
      </p>
    </div>
  );
}

/**
 * VISER  --> View --> Interact --> State in event handler --> Render
 */
