import React, { createContext, useReducer, useContext, useMemo, useCallback } from "react";

// Initial state
const initialState = {
  letters: [], // User typed letters
  result: null, // null | "success" | "fail"
};

// Reducer logic
function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_LETTER":
      if (state.letters.length >= 5) return state;
      return {
        ...state,
        letters: [...state.letters, action.payload],
        result: null,
      };
    case "REMOVE_LETTER":
      return { ...state, letters: state.letters.slice(0, -1), result: null };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// Context
const GameContext = createContext();
export const useGame = () => useContext(GameContext);

// Provider
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  const memoizedDispatch = useCallback(dispatch, []);
  
  const value = useMemo(() => ({
    state,
    dispatch: memoizedDispatch
  }), [state, memoizedDispatch]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
