import Cubie from "./cubie.jsx";
import useCubiesStore from "../../store/cubiesStore.js";
import React, { useRef } from "react";
import { useSpring, a } from "@react-spring/three";

const orange = "#FF6500"; // default Threejs orange colour is bad
const PI = Math.PI;
const Cube = () => {
  const cubies = useCubiesStore((state) => state.cubies);
  const staticCubies = [];
  const rotatingCubies = [];
  for (const i in cubies) {
    if (
      cubies[i].rotations[0] === 0 &&
      cubies[i].rotations[1] === 0 &&
      cubies[i].rotations[2] === 0
    ) {
      staticCubies.push({ ...cubies[i], id: i });
    }
  }
  for (const key in cubies) {
    if (
      cubies[key].rotations[0] !== 0 ||
      cubies[key].rotations[1] !== 0 ||
      cubies[key].rotations[2] !== 0
    ) {
      rotatingCubies.push({ ...cubies[key], id: key });
    }
  }
  console.log("rotatingCubies", rotatingCubies);

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, 0, Math.PI / 2] }
  });

  return (
    <group position={[0, 0, 0]}>
      {staticCubies.map((cubie) => (
        <Cubie
          key={cubie.id}
          position={cubie.position}
          frontColour={cubie.frontColour}
          leftColour={cubie.leftColour}
          rightColour={cubie.rightColour}
          topColour={cubie.topColour}
          backColour={cubie.backColour}
          downColour={cubie.downColour}
        />
      ))}
      <a.group position={[0, 0, 0]} rotation={rotation}>
        {rotatingCubies.map((cubie) => (
          <Cubie
            key={cubie.id}
            position={cubie.position}
            frontColour={cubie.frontColour}
            leftColour={cubie.leftColour}
            rightColour={cubie.rightColour}
            topColour={cubie.topColour}
            backColour={cubie.backColour}
            downColour={cubie.downColour}
          />
        ))}
      </a.group>
    </group>
  );
};

export default Cube;
