import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Cube from "./components/cube/cube.jsx";
import Cubie from "./components/cube/cubie.jsx";
import Tile from "./components/tile/tile.jsx";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, -5]} />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5]} />
        <meshPhysicalMaterial color="red" />
      </mesh>
      <Cube />
      <OrbitControls />
    </>
  );
};

export default Scene;
