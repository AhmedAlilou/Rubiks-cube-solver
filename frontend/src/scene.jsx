import React from "react";
import { OrbitControls } from "@react-three/drei";
import Cube from "./components/initialCube/cube.jsx";
import "./App.css";
import Pivot from "./components/initialCube/pivot.jsx";

const Scene = () => {
  return (
    <>
      <Pivot />
      <Cube />
      <OrbitControls />
    </>
  );
};

export default Scene;
