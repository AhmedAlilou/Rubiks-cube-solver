import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import RotateButton from "./components/UI/rotateButton";

function App() {
  return (
    <>
      <RotateButton />
      <Canvas style={{ height: "80vh", width: "100vw" }}>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
