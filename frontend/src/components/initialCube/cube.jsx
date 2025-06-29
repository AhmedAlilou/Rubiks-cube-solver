import React from "react";
import cubeStore from "../../store/cubiesStore.js";
import Cubie from "./cubie.jsx";

const Cube = () => {
  const cubies = cubeStore((state) => state.cubies);

  return (
    <group position={[0, 0, 0]}>
      {cubies.map((cubie) => {
        console.log(cubie);
        return (
          <Cubie
            key={cubie.id}
            cubieID={cubie.id}
            currentPosition={cubie.position}
            colours={cubie.colours}
          />
        );
      })}
    </group>
  );
};

export default Cube;
