import Cubie from "./cubie.jsx";
import useCubiesStore from "../../store/cubiesStore.js";
import React from "react";
import { useSpring, a } from "@react-spring/three";
import { useState } from "react";

const PI = Math.PI;
const tension = 350;
const friction = 25;

const Cube = () => {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);

  const staticCubies = [];
  const rotatingCubies = [];

  const currentXRotation = useCubiesStore((state) => state.currentXRotation); // current rotation state
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  );
  const currentYRotation = useCubiesStore((state) => state.currentYRotation); // current rotation state
  const setCurrentYRotation = useCubiesStore(
    (state) => state.setCurrentYRotation
  );
  const currentZRotation = useCubiesStore((state) => state.currentZRotation); // current rotation state
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );

  const prime = useCubiesStore((state) => state.prime); // whether the rotation is a prime turn
  const setPrime = useCubiesStore((state) => state.setPrime); // function to update prime state

  const double = useCubiesStore((state) => state.double);
  const setDouble = useCubiesStore((state) => state.setDouble);

  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  const mass = useCubiesStore((state) => state.mass);

  const [resetXSpring, setResetXSpring] = useState(false); // these are here to reset rotation to 0 without triggering another useSpring animation
  const [resetYSpring, setResetYSpring] = useState(false);
  const [resetZSpring, setResetZSpring] = useState(false);

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
    config: {
      tension: tension,
      friction: friction,
      mass: mass
    },
    reset: resetXSpring,
    onRest: () => {
      if (!resetXSpring) {
        console.log("Animation complete - updating cubie positions");

        const updatedCubies = {};

        rotatingCubies.forEach((cubie) => {
          if (double) {
            updatedCubies[cubie.id] = {
              ...cubies,
              position: [
                cubie.position[0],
                -cubie.position[1],
                -cubie.position[2]
              ],
              backColour: cubie.frontColour,
              frontColour: cubie.backColour,
              bottomColour: cubie.topColour,
              topColour: cubie.bottomColour,
              rightColour: cubie.rightColour,
              leftColour: cubie.leftColour,
              isRotating: false
            };
          } else if (!prime) {
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

        setResetXSpring(true);
        setCurrentXRotation(0);
      } else {
        setResetXSpring(false);
        setButtonsDisabled(false);
      }
    }
  });
  const { rotationY } = useSpring({
    rotationY: currentYRotation,
    config: {
      tension: tension,
      friction: friction,
      mass: mass
    },
    reset: resetYSpring,
    onRest: () => {
      if (!resetYSpring) {
        console.log("Animation complete - updating cubie positions");

        const updatedCubies = {};

        rotatingCubies.forEach((cubie) => {
          if (double) {
            updatedCubies[cubie.id] = {
              ...cubies,
              position: [
                -cubie.position[0],
                cubie.position[1],
                -cubie.position[2]
              ],
              backColour: cubie.frontColour,
              frontColour: cubie.backColour,
              rightColour: cubie.leftColour,
              leftColour: cubie.rightColour,
              topColour: cubie.topColour,
              bottomColour: cubie.bottomColour,
              isRotating: false
            };
          } else if (!prime) {
            updatedCubies[cubie.id] = {
              ...cubie,
              position: [
                -cubie.position[2],
                cubie.position[1],
                cubie.position[0]
              ],
              backColour: cubie.leftColour,
              leftColour: cubie.frontColour,
              frontColour: cubie.rightColour,
              rightColour: cubie.backColour,
              isRotating: false
            };
          } else {
            updatedCubies[cubie.id] = {
              ...cubie,
              position: [
                cubie.position[2],
                cubie.position[1],
                -cubie.position[0]
              ],
              leftColour: cubie.backColour,
              frontColour: cubie.leftColour,
              rightColour: cubie.frontColour,
              backColour: cubie.rightColour,
              isRotating: false
            };
          }
        });

        setCubies(updatedCubies);

        setResetYSpring(true);
        setCurrentYRotation(0);
      } else {
        setResetYSpring(false);
        setButtonsDisabled(false);
      }
    }
  });
  const { rotationZ } = useSpring({
    rotationZ: currentZRotation,
    config: {
      tension: tension,
      friction: friction,
      mass: mass
    },
    reset: resetZSpring,
    onRest: () => {
      if (!resetZSpring) {
        console.log("Animation complete - updating cubie positions");

        const updatedCubies = {};

        rotatingCubies.forEach((cubie) => {
          if (double) {
            updatedCubies[cubie.id] = {
              ...cubies,
              position: [
                -cubie.position[0],
                -cubie.position[1],
                cubie.position[2]
              ],
              leftColour: cubie.rightColour,
              rightColour: cubie.leftColour,
              bottomColour: cubie.topColour,
              topColour: cubie.bottomColour,
              frontColour: cubie.frontColour,
              backColour: cubie.backColour,
              isRotating: false
            };
          } else if (!prime) {
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

        setResetZSpring(true);
        setCurrentZRotation(0);
      } else {
        setResetZSpring(false);
        setButtonsDisabled(false);
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
        rotation-y={rotationY}
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
