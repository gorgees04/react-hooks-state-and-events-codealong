function Toggle({ isOn, setIsOn }) {
  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
