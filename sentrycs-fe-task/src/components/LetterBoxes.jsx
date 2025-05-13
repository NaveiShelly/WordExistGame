import React from "react";
import { useGame } from "../context/GameContext";
import "../styles.css";

const LetterBoxes = () => {
  const { state } = useGame();

  return (
    <div className="box-row">
      {[...Array(5)].map((_, i) => {
        const char = state.letters[i] || "";

        const borderClass =
          state.result === "success"
            ? "green-border"
            : state.result === "fail"
            ? "red-border"
            : "default-border";

        return (
          <div key={i} className={`box ${borderClass}`}>
            {char}
          </div>
        );
      })}
    </div>
  );
};

export default LetterBoxes;
