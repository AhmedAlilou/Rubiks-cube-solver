import Cubie from "./cubie.jsx";
import useCubiesStore from "../../store/cubiesStore.js";
import React from "react";
import { useSpring, a } from "@react-spring/three";
import { useState } from "react";

const PI = Math.PI;

const Cube = () => {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);

  const staticCubies = [];
  const rotatingCubies = [];

  const currentXRotation = useCubiesStore((state) => state.currentXRotation); // current rotation state
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  ); // function to update current rotation
  const currentZRotation = useCubiesStore((state) => state.currentZRotation); // current rotation state
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  ); // function to update current rotation
  const prime = useCubiesStore((state) => state.prime); // whether the rotation is a prime turn
  const setPrime = useCubiesStore((state) => state.setPrime); // function to update prime state

  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  const pivotPosition = useCubiesStore((state) => state.pivotPosition);
  const setPivotPosition = useCubiesStore((state) => state.setPivotPosition);

  const [resetZSpring, setResetZSpring] = useState(false);
  const [resetXSpring, setResetXSpring] = useState(false);

  // Separate cubies into static and rotating
  for (const i in cubies) {
    const isRotating = cubies[i].isRotating;
    if (!isRotating) {
      staticCubies.push({ ...cubies[i], id: i });
    } else {
      rotatingCubies.push({ ...cubies[i], id: i });
    }
  }

  const { rotationX } = useSpring({
    rotationX: currentXRotation,
    config: { tension: 300, friction: 30 },
    reset: resetXSpring,
    onRest: () => {
      setButtonsDisabled(false);
      if (!resetXSpring) {
        console.log("Animation complete - updating cubie positions");

        const updatedCubies = {};

        rotatingCubies.forEach((cubie) => {
          if (!prime) {
            updatedCubies[cubie.id] = {
              ...cubie,
              position: [
                cubie.position[0],
                cubie.position[2],
                -cubie.position[1]
              ],
              backColour: cubie.topColour,
              topColour: cubie.frontColour,
              frontColour: cubie.bottomColour,
              bottomColour: cubie.backColour,
              isRotating: false
            };
          } else {
            updatedCubies[cubie.id] = {
              ...cubie,
              position: [
                cubie.position[0],
                -cubie.position[2],
                cubie.position[1]
              ],
              topColour: cubie.backColour,
              backColour: cubie.bottomColour,
              bottomColour: cubie.frontColour,
              frontColour: cubie.topColour,
              isRotating: false
            };
          }
        });

        setCubies(updatedCubies);
        console.log(staticCubies, rotatingCubies);

        setResetXSpring(true);
        setCurrentXRotation(0);
      } else {
        setResetXSpring(false);
      }
    }
  });

  // Spring animation for Z-axis rotation
  const { rotationZ } = useSpring({
    rotationZ: currentZRotation,
    config: { tension: 300, friction: 30 },
    reset: resetZSpring,
    onRest: () => {
      setButtonsDisabled(false);
      if (!resetZSpring) {
        console.log("Animation complete - updating cubie positions");

        const updatedCubies = {};

        rotatingCubies.forEach((cubie) => {
          if (!prime) {
            updatedCubies[cubie.id] = {
              ...cubie,
              position: [
                cubie.position[1],
                -cubie.position[0],
                cubie.position[2]
              ],
              topColour: cubie.leftColour,
              leftColour: cubie.bottomColour,
              rightColour: cubie.topColour,
              bottomColour: cubie.rightColour,
              isRotating: false
            };
          } else {
            updatedCubies[cubie.id] = {
              ...cubie,
              position: [
                -cubie.position[1],
                cubie.position[0],
                cubie.position[2]
              ],
              topColour: cubie.rightColour,
              rightColour: cubie.bottomColour,
              bottomColour: cubie.leftColour,
              leftColour: cubie.topColour,
              isRotating: false
            };
          }
        });

        setCubies(updatedCubies);
        console.log(staticCubies, rotatingCubies);

        setResetZSpring(true);
        setCurrentZRotation(0);
      } else {
        setResetZSpring(false);
      }
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* Static cubies */}
      {staticCubies.map((cubie) => (
        <Cubie key={cubie.id} {...cubie} />
      ))}

      {/* Rotating cubies */}
      <a.group
        position={[0, 0, 0]}
        rotation-x={rotationX}
        rotation-z={rotationZ}
      >
        {rotatingCubies.map((cubie) => (
          <Cubie key={cubie.id} position={cubie.position} {...cubie} />
        ))}
      </a.group>
    </group>
  );
};

export default Cube;
