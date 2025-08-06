import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Cube from "./components/cube/cube.jsx";
import Cubie from "./components/cube/cubie.jsx";
import Tile from "./components/tile/tile.jsx";

const Scene = () => {
  return (
    <>
      <Cubie />
      <Cube />
      <OrbitControls />
    </>
  );
};

export default Scene;
