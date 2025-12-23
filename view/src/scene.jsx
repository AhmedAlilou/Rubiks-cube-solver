import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Cube from "./components/cube/cube.jsx";
import Cubie from "./components/cube/cubie.jsx";
import Tile from "./components/tile/tile.jsx";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.35}
        penumbra={0.4}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
      />
      <directionalLight
        position={[-5, 6, -3]}
        intensity={0.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Cube />
      <OrbitControls />
    </>
  );
};

export default Scene;
