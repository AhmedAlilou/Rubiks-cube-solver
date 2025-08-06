import Tile from "../tile/tile.jsx";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const PI = Math.PI;
const orange = "#FF6500"; // default Threejs orange colour is bad
const grey = "#808080"; // Default grey colour for the front face

const Cubie = (props) => {
  const ref = useRef();
  let currentRotation = 0;

  useFrame((state, delta) => {
    currentRotation += delta;
    if (currentRotation <= props.rotations[0]) {
      ref.current.rotation.x += delta;
    }
    if (currentRotation <= props.rotations[1]) {
      ref.current.rotation.y += delta;
    }
    if (currentRotation <= props.rotations[2]) {
      ref.current.rotation.z += delta;
    }
  });
  return (
    <group ref={ref} position={props.position}>
      <Tile
        colour={props.frontColour || grey}
        rotation={[0, 0, 0]}
        position={[0, 0, 1]}
      />
      <Tile
        colour={props.rightColour || grey}
        rotation={[0, PI / 2, 0]}
        position={[0.5, 0, 0.5]}
      />
      <Tile
        colour={props.leftColour || grey}
        rotation={[0, PI / 2, 0]}
        position={[-0.5, 0, 0.5]}
      />
      <Tile
        colour={props.backColour || grey}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
      />
      <Tile
        colour={props.topColour || grey}
        rotation={[PI / 2, 0, 0]}
        position={[0, 0.5, 0.5]}
      />
      <Tile
        colour={props.bottomColour || grey}
        rotation={[PI / 2, 0, 0]}
        position={[0, -0.5, 0.5]}
      />
    </group>
  );
};

export default Cubie;
