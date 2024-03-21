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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGrowing) {
        if (buttonSize < 200) {
          setButtonSize((prevSize) => prevSize + 10);
        } else {
          setIsGrowing(false);
        }
      } else {
        if (buttonSize > 100) {
          setButtonSize((prevSize) => prevSize - 10);
        } else {
          setIsGrowing(true);
        }
      }
    }, 100);
    return () => clearInterval(interval);
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
