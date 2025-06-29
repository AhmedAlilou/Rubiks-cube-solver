import React from "react";
import * as THREE from "three";

const Cubie = (props) => {
  const cubieID = props.cubieID;
  const solvedPosition = props.solvedPosition;
  const currentPosition = props.currentPosition;
  const colours = props.colours;

  const materials = [
    <meshBasicMaterial attach="material-0" color={colours.right || "black"} />, // Right face
    <meshBasicMaterial attach="material-1" color={colours.left || "black"} />, // Left face
    <meshBasicMaterial attach="material-2" color={colours.top || "black"} />, // Top face
    <meshBasicMaterial attach="material-3" color={colours.down || "black"} />, // Down face
    <meshBasicMaterial attach="material-4" color={colours.front || "black"} />, // Front face
    <meshBasicMaterial attach="material-5" color={colours.back || "black"} /> // Back fase
  ];
  return (
    <mesh key={cubieID} position={currentPosition}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {materials}
    </mesh>
  );
};

export default Cubie;
