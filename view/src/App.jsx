import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import useApplicationStore from "./store/applicationStore";
import Scene from "./scene";
import Keypad from "./components/UI/keypad/keypad";
import Scramble from "./components/UI/scramble/scramble";
import Solution from "./components/UI/solution/solution";
import Menu from "./components/UI/menu/menu";
import Explanation from "./components/UI/explanation/explanation";

function App() {
  const axisHelper = useApplicationStore((state) => state.axisHelper);
  return (
    <div className="App">
      <div className="mainRow">
        <Keypad />
        <div className="canvas">
          <Canvas>
            <Scene />
            {axisHelper ? <axesHelper args={[1000]} /> : null}
            user
          </Canvas>
        </div>
        <Solution />
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col">
          <Scramble />

          <Menu />
        </div>
        <Explanation />
      </div>
    </div>
  );
}

export default App;
