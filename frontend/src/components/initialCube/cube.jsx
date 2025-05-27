import React from "react";
import Top from "./rows/top.jsx";
import Middle from "./rows/middle.jsx";
import Bottom from "./rows/bottom.jsx";

function Cube() {
  return (
    <group position={[0, 0, 0]}>
      <Top />
      <Middle />
      <Bottom />
    </group>
  );
}

export default Cube;
