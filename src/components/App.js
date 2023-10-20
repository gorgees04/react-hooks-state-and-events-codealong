import React, { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div style={isOn ? { background: "red" } : { background: "black" }}>
      <h3>Toggle</h3>
      <Toggle isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}

export default App;
