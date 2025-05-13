import React from "react";
import LetterBoxes from "./components/LetterBoxes";
import Keyboard from "./components/Keyboard";
import { GameProvider } from "./context/GameContext";
import "./styles.css";

function App() {
  return (
    <GameProvider>
      <div className="container">
        <h1>Word Exist?</h1>
        <LetterBoxes />
        <Keyboard />
      </div>
    </GameProvider>
  );
}

export default App;
