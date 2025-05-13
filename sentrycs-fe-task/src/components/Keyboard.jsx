import React from "react";
import { useGame } from "../context/GameContext";
import { checkWordExists } from "../utils/checkWord";

const Keyboard = () => {
  const { state, dispatch } = useGame();

  const handleLetter = (char) => {
    dispatch({ type: "ADD_LETTER", payload: char });
  };

  const handleBackspace = () => {
    dispatch({ type: "REMOVE_LETTER" });
  };

  const handleEnter = async () => {
    if (state.letters.length < 5) return;
    const word = state.letters.join("");
    const exists = await checkWordExists(word);
    dispatch({ type: "SET_RESULT", payload: exists ? "success" : "fail" });
  };

  // Define keyboard rows
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => {
            if (key === "Enter") {
              return (
                <button key="Enter" onClick={handleEnter}>
                  Enter
                </button>
              );
            } else if (key === "Backspace") {
              return (
                <button key="Backspace" onClick={handleBackspace}>
                  ←
                </button>
              );
            } else {
              return (
                <button key={key} onClick={() => handleLetter(key)}>
                  {key}
                </button>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
