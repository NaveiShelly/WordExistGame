import React, { useMemo } from "react";
import { useGame } from "../context/GameContext";
import LetterBoxes from "./LetterBoxes";
import Keyboard from "./Keyboard";
import { useKeyboard } from "../hooks/useKeyboard";

function GameContainer() {
  const { state } = useGame();
  const keyboardHandlers = useKeyboard();

  const memoizedState = useMemo(() => ({
    letters: state.letters,
    result: state.result
  }), [state.letters, state.result]);

  return (
    <div className="container">
      <h1>Word Exist?</h1>
      <LetterBoxes state={memoizedState} />
      <Keyboard {...keyboardHandlers} />
    </div>
  );
}

export default React.memo(GameContainer);
