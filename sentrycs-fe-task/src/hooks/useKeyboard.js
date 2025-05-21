import { useCallback, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { checkWordExists } from '../utils/checkWord';

export const useKeyboard = () => {
  const { state, dispatch } = useGame();
  const stateRef = useRef(state);
  stateRef.current = state;

  const handleLetter = useCallback((letter) => {
    if (stateRef.current.letters.length >= 5) return;
    dispatch({ type: "ADD_LETTER", payload: letter });
  }, [dispatch]);

  const handleBackspace = useCallback(() => {
    dispatch({ type: "REMOVE_LETTER" });
  }, [dispatch]);

  const handleEnter = useCallback(async () => {
    if (stateRef.current.letters.length < 5) {
      dispatch({ type: "SET_RESULT", payload: "fail" });
      return;
    }
    const word = stateRef.current.letters.join("");
    const exists = await checkWordExists(word);
    dispatch({ type: "SET_RESULT", payload: exists ? "success" : "fail" });
  }, [dispatch]);

  return {
    handleLetter,
    handleBackspace,
    handleEnter
  };
}; 