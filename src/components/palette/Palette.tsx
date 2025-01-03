interface PaletteProps {
    colors: string[];
    onColorClick: (color: string) => void;
  }
  
  function Palette({ colors, onColorClick }: PaletteProps) {
    return (
      <div>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => onColorClick(color)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              border: "1px solid #000",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <span>{color}</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default Palette;
  