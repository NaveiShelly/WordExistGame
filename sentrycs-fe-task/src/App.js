import React, { useCallback } from "react";
import GameContainer from "./components/GameContainer";
import { GameProvider } from "./context/GameContext";
import "./styles.css";

function App() {

  
  return (
    <GameProvider>
    <GameContainer />
  </GameProvider>
  );
}

export default App;
