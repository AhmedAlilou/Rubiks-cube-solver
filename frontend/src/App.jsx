import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import Keypad from "./components/UI/keypad.jsx";

function App() {
  return (
    <>
      <Keypad />
      <Canvas style={{ height: "80vh", width: "100vw" }}>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
