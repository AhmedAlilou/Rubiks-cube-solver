import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import Keypad from "./components/UI/keypad/keypad";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row w-[100vw]">
        <Keypad />
        <div className="canvas">
          <Canvas>
            <Scene />
            <axesHelper args={[5]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
