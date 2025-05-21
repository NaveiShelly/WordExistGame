import React, { useCallback, useMemo } from "react";

const KeyboardButton = React.memo(({ key, onClick, children }) => (
  <button
    className="keyboard-key"
    onClick={onClick}
  >
    {children}
  </button>
));

KeyboardButton.displayName = 'KeyboardButton';

const Keyboard = React.memo(({handleLetter, handleBackspace, handleEnter}) => {
  const rows = useMemo(() => [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ], []);

  const createButtonHandler = useCallback((key) => {
    if (key === "Enter") {
      return handleEnter;
    } else if (key === "Backspace") {
      return handleBackspace;
    } else {
      return () => handleLetter(key);
    }
  }, [handleLetter, handleBackspace, handleEnter]);

  const renderButton = useCallback((key) => (
    <KeyboardButton
      key={key}
      onClick={createButtonHandler(key)}
    >
      {key}
    </KeyboardButton>
  ), [createButtonHandler]);

  const renderRow = useCallback((row, rowIndex) => (
    <div key={rowIndex} className="keyboard-row">
      {row.map(renderButton)}
    </div>
  ), [renderButton]);

  return (
    <div className="keyboard">
      {rows.map(renderRow)}
    </div>
  );
});

Keyboard.displayName = 'Keyboard';

export default Keyboard;
