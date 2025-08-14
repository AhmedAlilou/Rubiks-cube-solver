import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import Keypad from "./components/UI/keypad/keypad";

function App() {
  return (
    <div className="App">
      <Keypad />
      <div className="canvas">
        <Canvas>
          <Scene />
          <axesHelper args={[5]} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
