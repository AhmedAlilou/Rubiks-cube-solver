import React, { use } from "react";
import cubeStore from "../../store/cubiesStore.js";
import Cubie from "./cubie.jsx";
import useRotationStore from "../../store/rotationStore.js";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useEffect } from "react";
import getRotatingCubies from "../../functions/helperFunctions/getRotatingCubies.js";
import updateRotationState from "../../functions/helperFunctions/updateRotationState.js";

const Cube = () => {
  const cubies = cubeStore((state) => state.cubies);
  const rotatingGroup = useRef();
  const axis = useRotationStore((state) => state.axis);
  const layerValue = useRotationStore((state) => state.layerValue);
  const rotatingCubies = getRotatingCubies(cubies, axis, layerValue);
  const clockWise = useRotationStore((state) => state.clockWise);
  const staticCubies = cubies.filter(
    (cubie) => !rotatingCubies.includes(cubie)
  );
  const target = useRotationStore((state) => state.target);
  const progressRef = useRef(0); // ref instead of useState because Usestate causes over turns
  const setRotating = useRotationStore((state) => state.setRotating);

  const rotating = useRotationStore((state) => state.rotating);
  const speed = 3;
  useEffect(() => {
    progressRef.current = 0;
  }, [rotating]);

  useFrame((state, delta) => {
    if (rotating && progressRef.current < target) {
      let step = delta * speed;

      if (progressRef.current + step > target) {
        step = target - progressRef.current;
        setRotating(false);
      }

      if (clockWise) {
        if (axis === "x") rotatingGroup.current.rotation.x -= step;
        if (axis === "y") rotatingGroup.current.rotation.y -= step;
        if (axis === "z") rotatingGroup.current.rotation.z -= step;
      } else {
        if (axis === "x") rotatingGroup.current.rotation.x += step;
        if (axis === "y") rotatingGroup.current.rotation.y += step;
        if (axis === "z") rotatingGroup.current.rotation.z += step;
      }

      progressRef.current += step;
      if (progressRef.current >= target) {
        console.log("Rotation complete");
      }
      // INSIDE IF STATEMENT:
      // function here to update positions
      // updateCubiePositions(axis, numOfRotations)
      // update colours not sure how rn
    }
  });

  return (
    <>
      <group ref={rotatingGroup}>
        {rotatingCubies.map((cubie) => (
          <Cubie
            key={cubie.id}
            cubieID={cubie.id}
            currentPosition={cubie.position}
            colours={cubie.colours}
          />
        ))}
      </group>
      <group>
        {staticCubies.map((cubie) => (
          <Cubie
            key={cubie.id}
            cubieID={cubie.id}
            currentPosition={cubie.position}
            colours={cubie.colours}
          />
        ))}
      </group>
    </>
  );
};

export default Cube;
