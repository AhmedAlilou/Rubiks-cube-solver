import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import useApplicationStore from "./store/applicationStore";
import Scene from "./scene";
import Keypad from "./components/UI/keypad/keypad";
import Scramble from "./components/UI/scramble/scramble";
import Solution from "./components/UI/solution/solution";
import Menu from "./components/UI/menu/menu";

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
