import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import cubeStore from "../../logic/store/cubeStore";

function App() {
  // This will log to browser console
  console.log(cubeStore.getState().cube);

  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
