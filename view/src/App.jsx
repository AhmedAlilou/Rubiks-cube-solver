import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import F from "./components/UI/F.jsx";
import FPrime from "./components/UI/F'.jsx"; // Importing the F' component
import R from "./components/UI/R.jsx";
import RPrime from "./components/UI/R'.jsx";

function App() {
  return (
    <>
      <F />
      <FPrime />
      <R />
      <RPrime />
      <Canvas style={{ height: "80vh", width: "100vw" }}>
        <Scene />
        <axesHelper args={[5]} />
      </Canvas>
    </>
  );
}

export default App;
