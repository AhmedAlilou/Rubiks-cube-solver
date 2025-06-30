import React from "react";
import * as THREE from "three";
import useKeysStore from "../../store/keysStore.js";

const Cubie = (props) => {
  const cubieID = props.cubieID;
  const solvedPosition = props.solvedPosition;
  const currentPosition = props.currentPosition;
  const colours = props.colours;
  const materialKey = useKeysStore((state) => state.materialKey);

  const materials = [
    <meshBasicMaterial
      key={`right`}
      attach="material-0"
      color={colours.right || "#444"}
    />, // Right face
    <meshBasicMaterial
      key={`left`}
      attach="material-1"
      color={colours.left || "#444"}
    />, // Left face
    <meshBasicMaterial
      key={`top`}
      attach="material-2"
      color={colours.top || "#444"}
    />, // Top face
    <meshBasicMaterial
      key={`down`}
      attach="material-3"
      color={colours.down || "#444"}
    />, // Down face
    <meshBasicMaterial
      key={`front`}
      attach="material-4"
      color={colours.front || "#444"}
    />, // Front face
    <meshBasicMaterial
      key={`back`}
      attach="material-5"
      color={colours.back || "#444"}
    /> // Back fase
  ];
  return (
    <mesh position={currentPosition}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {materials}
    </mesh>
  );
};

export default Cubie;
