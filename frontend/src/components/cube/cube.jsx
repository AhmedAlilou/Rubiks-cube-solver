import React, { use } from "react";
import cubeStore from "../../store/cubiesStore.js";
import Cubie from "./cubie.jsx";
import useRotationStore from "../../store/rotationStore.js";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import getRotatingCubies from "../../store/helperFunctions/getRotatingCubies.js";

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
  const progress = useRotationStore((state) => state.progress);
  const setProgress = useRotationStore((state) => state.setProgress);
  const setComplete = useRotationStore((state) => state.setComplete);

  const rotating = useRotationStore((state) => state.rotating);
  const speed = 1.5;

  useFrame((state, delta) => {
    if (rotating && rotatingGroup.current && progress < target) {
      let step = delta * speed;
      if (progress + step > target) {
        // We've finished
        step = target - progress;
        setProgress(target);
        setComplete(true);
        console.log(rotatingCubies);
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

      setProgress(progress + step);
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
