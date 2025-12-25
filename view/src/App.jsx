import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import Keypad from "./components/UI/keypad/keypad";
import Scramble from "./components/UI/scramble/scramble";
import Solution from "./components/UI/solution/solution";
import Menu from "./components/UI/menu/menu";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row w-[100vw] h-[60vh]">
        <Keypad />
        <div className="canvas">
          <Canvas>
            <Scene />
            <axesHelper args={[1000]} />
          </Canvas>
        </div>
        <Solution />
      </div>
      <Scramble />
      <Menu />
      <div className="footer">
        Report issues to my Instagram (
        <a
          href="https://instagram.com/ahmedalilou1"
          target="_blank"
          rel="noopener noreferrer"
        >
          ahmedalilou1
        </a>
        ) and include the scramble if necessary
      </div>
    </div>
  );
}

export default App;
