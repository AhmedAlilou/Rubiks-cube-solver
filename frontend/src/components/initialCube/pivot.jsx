import React from "react";

function Pivot() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhysicalMaterial color="#ff0000" />
    </mesh>
  );
}

export default Pivot;
