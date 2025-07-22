import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";

function App() {
  return (
    <>
      <Canvas style={{ height: "80vh", width: "100vw" }}>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
