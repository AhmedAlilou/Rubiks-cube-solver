import Tile from "../tile/tile.jsx";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";

const PI = Math.PI;
const grey = "#808080"; // Default grey colour for the front face
const black = "#341539";

const Cubie = (props) => {
  return (
    <group position={props.position}>
      <Tile
        colour={props.frontColour || black}
        rotation={[0, 0, 0]}
        position={[0, 0, 0.5]}
      />
      <Tile
        colour={props.rightColour || black}
        rotation={[0, PI / 2, 0]}
        position={[0.5, 0, 0]}
      />
      <Tile
        colour={props.leftColour || black}
        rotation={[0, PI / 2, 0]}
        position={[-0.5, 0, 0]}
      />
      <Tile
        colour={props.backColour || black}
        rotation={[0, 0, 0]}
        position={[0, 0, -0.5]}
      />
      <Tile
        colour={props.topColour || black}
        rotation={[PI / 2, 0, 0]}
        position={[0, 0.5, 0]}
      />
      <Tile
        colour={props.bottomColour || black}
        rotation={[PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
      />
    </group>
  );
};

export default Cubie;
