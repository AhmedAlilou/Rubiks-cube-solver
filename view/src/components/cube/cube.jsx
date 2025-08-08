import Cubie from "./cubie.jsx";
import useCubiesStore from "../../store/cubiesStore.js";
import React from "react";
import { useSpring, a } from "@react-spring/three";

const PI = Math.PI;

const Cube = () => {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const move = useCubiesStore((state) => state.move); // boolean from store

  const staticCubies = [];
  const rotatingCubies = [];

  const currentRotation = useCubiesStore((state) => state.currentRotation); // current rotation state
  const setCurrentRotation = useCubiesStore(
    (state) => state.setCurrentRotation
  ); // function to update current rotation state

  // Separate cubies into static and rotating
  for (const i in cubies) {
    const isRotating = cubies[i].isRotating;
    if (!isRotating) {
      staticCubies.push({ ...cubies[i], id: i });
    } else {
      rotatingCubies.push({ ...cubies[i], id: i });
    }
  }

  // Spring animation for Z-axis rotation
  const { rotationZ } = useSpring({
    rotationZ: currentRotation,
    config: { tension: 300, friction: 30 },
    onRest: () => {
      console.log("Animation complete - updating cubie rotations");

      // Update cubies rotations on z axis to currentRotation
      // We'll assume all rotatingCubies rotate together along z
      const updatedCubies = {};

      rotatingCubies.forEach((cubie) => {
        updatedCubies[cubie.id] = {
          ...cubie,
          rotations: [cubie.rotations[0], cubie.rotations[1], PI / 2],
          position: [cubie.position[1], -cubie.position[0], cubie.position[2]],
          topColour: cubie.leftColour,
          leftColour: cubie.bottomColour,
          rightColour: cubie.topColour,
          bottomColour: cubie.rightColour,
          isRotating: false
        };
      });

      setCubies(updatedCubies);
      console.log(staticCubies, rotatingCubies);
    }
  });

  return (
    <group>
      {/* Static cubies */}
      {staticCubies.map((cubie) => (
        <Cubie key={cubie.id} rotation-z={cubie.rotations[2]} {...cubie} />
      ))}

      {/* Rotating cubies */}
      <a.group rotation-z={rotationZ}>
        {rotatingCubies.map((cubie) => (
          <Cubie key={cubie.id} {...cubie} />
        ))}
      </a.group>
    </group>
  );
};

export default Cube;
