import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import F from "./components/UI/F.jsx";
import FPrime from "./components/UI/F'.jsx"; // Importing the F' component
import R from "./components/UI/R.jsx";
import RPrime from "./components/UI/R'.jsx";
import U from "./components/UI/U.jsx";
import UPrime from "./components/UI/U'.jsx";
import D from "./components/UI/D.jsx";
import DPrime from "./components/UI/D'.jsx";
import L from "./components/UI/L.jsx";
import LPrime from "./components/UI/L'.jsx"; // Importing the L' component
import B from "./components/UI/B.jsx";
import BPrime from "./components/UI/B'.jsx"; // Importing the B' component

function App() {
  return (
    <>
      <div className="keypad">
        <F />
        <FPrime />
        <R />
        <RPrime />
        <U />
        <UPrime />
        <D />
        <DPrime />
        <L />
        <LPrime />
        <B />
        <BPrime />
      </div>

      <Canvas
        style={{
          backgroundColor: "#0A0A0A",
          height: "70vh",
          width: "100vw",
          marginTop: "30px"
        }}
      >
        <Scene />
        <axesHelper args={[5]} />
      </Canvas>
    </>
  );
}

export default App;
