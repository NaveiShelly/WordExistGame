import React from "react";
import "../styles.css";

const LetterBoxes = ({state}) => {

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

export default React.memo(LetterBoxes);
