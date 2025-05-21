import React, { useCallback } from "react";
import { useGame } from "../context/GameContext";
import { checkWordExists } from "../utils/checkWord";
import LetterBoxes from "./LetterBoxes";
import Keyboard from "./Keyboard";

function GameContainer() {
  const { state, dispatch } = useGame();

  const handleLetter = useCallback((letter) => {
    if (state.letters.length >= 5) return;
    dispatch({ type: "ADD_LETTER", payload: letter });
  }, [dispatch]);

  const handleBackspace = useCallback(() => {
    dispatch({ type: "REMOVE_LETTER" });
  }, [dispatch]);

  const handleEnter = useCallback(async () => {
    if (state.letters.length < 5) {
      dispatch({ type: "SET_RESULT", payload: "fail" });
      return;
    }
    const word = state.letters.join("");
    const exists = await checkWordExists(word);
    dispatch({ type: "SET_RESULT", payload: exists ? "success" : "fail" });
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Word Exist?</h1>
      <LetterBoxes state={state} />
      <Keyboard
        handleLetter={handleLetter}
        handleBackspace={handleBackspace}
        handleEnter={handleEnter}
      />
    </div>
  );
}

export default React.memo(GameContainer);