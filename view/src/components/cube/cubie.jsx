import Tile from "../tile/tile.jsx";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";

const PI = Math.PI;
const grey = "#808080"; // Default grey colour for the front face
// use a realistic dark grey for the inner (unset) sticker colour
const black = "#262626";

const Cubie = (props) => {
  return (
    <group position={props.position}>
      <Tile
        colour={props.frontColour || black}
        rotation={[0, 0, 0]}
        position={[0, 0, 0.495]}
      />
      <Tile
        colour={props.rightColour || black}
        rotation={[0, PI / 2, 0]}
        position={[0.495, 0, 0]}
      />
      <Tile
        colour={props.leftColour || black}
        rotation={[0, PI / 2, 0]}
        position={[-0.495, 0, 0]}
      />
      <Tile
        colour={props.backColour || black}
        rotation={[0, 0, 0]}
        position={[0, 0, -0.495]}
      />
      <Tile
        colour={props.topColour || black}
        rotation={[PI / 2, 0, 0]}
        position={[0, 0.495, 0]}
      />
      <Tile
        colour={props.bottomColour || black}
        rotation={[PI / 2, 0, 0]}
        position={[0, -0.495, 0]}
      />
    </group>
  );
};

export default Cubie;
