import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "smile",
  "😡": "sad",
  "😠": "angry",
  "❤️": "love",
  "😑": "Expression less"
};

const emojiArr = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Your output will come here");

  function inputHandle(event) {
    const output = event.target.value;
    setEmoji(output);

    if (emojiDictionary[output] === undefined) {
      setMeaning("We don't have meaning for this emoji");
    }
    setMeaning(emojiDictionary[output]);
  }

  function clickHandle(output) {
    setMeaning(emojiDictionary[output]);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji Meaning</h1>

      <input
        onChange={inputHandle}
        className="input"
        placeholder="enter you emoji to see its meaning"
      />

      <div className="emogi">{emoji}</div>

      <div className="emogi-name">{meaning}</div>

      <div className="lists">
        {emojiArr.map((item) => {
          return (
            <li
              className="list-item"
              key={item}
              onClick={() => clickHandle(item)}
            >
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}
