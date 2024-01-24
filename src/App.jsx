import React, { useState } from "react";
import { ChromePicker, SketchPicker, SwatchesPicker } from "react-color";

function App() {
  const [color, setColor] = useState("#fff");
  const [secondColor, setSecondColor] = useState("#fff");
  const [thirdColor, setThirdColor] = useState("#fff");

  return (
    <div>
      <ChromePicker
        color={color}
        onChange={(updateColor) => {
          console.log(updateColor);
          setColor(updateColor.hex);
        }}
      />
      <p>Color one is: {color}</p>
      <SketchPicker
        color={secondColor}
        onChange={(updateColor) => {
          console.log(updateColor);
          setSecondColor(updateColor.hex);
        }}
      />
      <p>Color Two is: {secondColor}</p>
      <SketchPicker
      color={thirdColor}
      onChange={(updateColor) => {
        console.log(updateColor);
        setThirdColor(updateColor.hex);
      }}
    />
    <p>Color Three is: {thirdColor}</p>

    </div>
  );
}

export default App;
