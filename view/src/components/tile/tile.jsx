import React from "react";
import { DoubleSide } from "three";

function Tile(props) {
  return (
    <mesh position={props.position} rotation={props.rotation}>
      <planeGeometry args={[0.99, 0.99]} />
      <meshBasicMaterial color={props.colour} side={DoubleSide} />
    </mesh>
  );
}

export default Tile;
