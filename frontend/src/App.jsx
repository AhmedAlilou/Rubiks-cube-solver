import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
