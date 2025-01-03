import React, { useState } from "react";
import Palette from "./components/palette/Palette";

const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
};

const App = () => {
  const [palette, setPalette] = useState<string[]>([]);
  const [inputColor, setInputColor] = useState<string>("");

  const generatePalette = (): void => {
    const newPalette = Array.from({ length: 5 }, generateRandomColor);
    setPalette(newPalette);
  };

  const handleColorInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputColor(value);
  };

  const isValidHex = (hex: string): boolean => /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex);

  const copyToClipboard = (color: string): void => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Color Palette Generator</h1>
      <button onClick={generatePalette} style={{ margin: "20px", padding: "10px" }}>
        Generate Palette
      </button>

      {/* Componente Palette para mostrar la paleta de colores */}
      <Palette colors={palette} onColorClick={copyToClipboard} />

      {/* Entrada de color manual */}
      <div style={{ marginTop: "40px" }}>
        <h3>Enter a Hex Color:</h3>
        <input
          type="text"
          value={inputColor}
          onChange={handleColorInput}
          placeholder="#FFFFFF"
          style={{ padding: "10px", textAlign: "center", fontSize: "16px" }}
        />
        <div
          style={{
            marginTop: "20px",
            width: "100px",
            height: "100px",
            backgroundColor: isValidHex(inputColor) ? inputColor : "#ccc",
            margin: "auto",
            border: "1px solid #000",
          }}
        >
          {isValidHex(inputColor) ? "" : <p style={{ fontSize: "12px" }}>Invalid Hex</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
