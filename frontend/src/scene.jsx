import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Cube from "./components/cube/cube.jsx";

const Scene = () => {
  return (
    <>
      <Cube />
      <OrbitControls />
    </>
  );
};

export default Scene;
