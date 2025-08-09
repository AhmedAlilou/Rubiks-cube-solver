import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./scene";
import F from "./components/UI/keypad/regular/F.jsx";
import FPrime from "./components/UI/keypad/regular/F'.jsx";
import R from "./components/UI/keypad/regular/R.jsx";
import RPrime from "./components/UI/keypad/regular/R'.jsx";
import U from "./components/UI/keypad/regular/U.jsx";
import UPrime from "./components/UI/keypad/regular/U'.jsx";
import D from "./components/UI/keypad/regular/D.jsx";
import DPrime from "./components/UI/keypad/regular/D'.jsx";
import L from "./components/UI/keypad/regular/L.jsx";
import LPrime from "./components/UI/keypad/regular/L'.jsx";
import B from "./components/UI/keypad/regular/B.jsx";
import BPrime from "./components/UI/keypad/regular/B'.jsx";
import X from "./components/UI/keypad/rotation/x.jsx";
import XPrime from "./components/UI/keypad/rotation/x'.jsx";
import Y from "./components/UI/keypad/rotation/y.jsx";
import YPrime from "./components/UI/keypad/rotation/y'.jsx";
import Z from "./components/UI/keypad/rotation/z.jsx";
import ZPrime from "./components/UI/keypad/rotation/z'.jsx";
import M from "./components/UI/keypad/slice/M.jsx";
import MPrime from "./components/UI/keypad/slice/M'.jsx";
import E from "./components/UI/keypad/slice/E.jsx";
import EPrime from "./components/UI/keypad/slice/E'.jsx";
import S from "./components/UI/keypad/slice/S.jsx";
import SPrime from "./components/UI/keypad/slice/S'.jsx";
import Wb from "./components/UI/keypad/wide/b.jsx";
import WbPrime from "./components/UI/keypad/wide/b'.jsx";
import Wd from "./components/UI/keypad/wide/d.jsx";
import WdPrime from "./components/UI/keypad/wide/d'.jsx";
import Wf from "./components/UI/keypad/wide/f.jsx";
import WfPrime from "./components/UI/keypad/wide/f'.jsx";
import Wl from "./components/UI/keypad/wide/l.jsx";
import WlPrime from "./components/UI/keypad/wide/l'.jsx";
import Wr from "./components/UI/keypad/wide/r.jsx";
import WrPrime from "./components/UI/keypad/wide/r'.jsx";
import Wu from "./components/UI/keypad/wide/u.jsx";
import WuPrime from "./components/UI/keypad/wide/u'.jsx";

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
        <X />
        <XPrime />
        <Y />
        <YPrime />
        <Z />
        <ZPrime />
        <M />
        <MPrime />
        <E />
        <EPrime />
        <S />
        <SPrime />
        <Wb />
        <WbPrime />
        <Wd />
        <WdPrime />
        <Wf />
        <WfPrime />
        <Wl />
        <WlPrime />
        <Wr />
        <WrPrime />
        <Wu />
        <WuPrime />
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
