import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [isGrowing, setIsGrowing] = useState(false);
  const [buttonSize, setButtonSize] = useState(100);
  // KODUNUZ BURAYA GELECEK

  const handleButtonClick = () => {
    setIsGrowing(!isGrowing);
  };

  const adjustSize = () => {
    if (isGrowing && buttonSize > 200) {
      setButtonSize((prevSize) => prevSize + 10);
    } else if (!isGrowing && buttonSize > 100) {
      setButtonSize((prevSize) => prevSize - 10);
    }
  };

  React.useEffect(() => {
    if (isGrowing) {
      if (buttonSize < 200) {
        const interval = setInterval(() => {
          setButtonSize((prevSize) => prevSize + 1);
        }, 10);
        return () => clearInterval(interval);
      }
    } else {
      if (buttonSize > 100) {
        const interval = setInterval(() => {
          setButtonSize((prevSize) => prevSize - 1);
        }, 10);
        return () => clearInterval(interval);
      }
    }
  }, [isGrowing, buttonSize]);

  return (
    <button
      style={{
        fontSize: 20,
        width: buttonSize,
        height: buttonSize,
        borderRadius: "50%",
        transition: "width 0.2s, height 0.2s",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleButtonClick}
    >
      {isGrowing ? "Küçült" : "Büyüt"}
    </button>
  );
};

export default App;
