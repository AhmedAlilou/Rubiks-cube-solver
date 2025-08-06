import Cubie from "./cubie.jsx";
import useCubiesStore from "../../store/cubiesStore.js";

const orange = "#FF6500"; // default Threejs orange colour is bad
let staticCubies = [];
const Cube = () => {
  const cubies = useCubiesStore((state) => state.cubies);
  staticCubies = [];
  for (const i in cubies) {
    if (
      cubies[i].rotations[0] === 0 &&
      cubies[i].rotations[1] === 0 &&
      cubies[i].rotations[2] === 0
    ) {
      staticCubies.push({ ...cubies[i], id: i });
    }
  }
  console.log("Static Cubies:", staticCubies);

  return (
    <group position={[0, 0, 0]}>
      {/* {staticCubies.map((cubie) => (
        <Cubie id={cubie} {...cubie} rotation={[0, 0, 0]} />
      ))} */}
      <Cubie
        id={1}
        position={[0, 0, 1]}
        frontColour={"green"}
        rotations={cubies[1].rotations || [0, 0, 0]}
      />
      <Cubie
        id={2}
        position={[1, 0, 1]}
        frontColour={"green"}
        rightColour={"red"}
        rotations={cubies[2].rotations || [0, 0, 0]}
      />
      <Cubie
        id={3}
        position={[-1, 0, 1]}
        frontColour={"green"}
        leftColour={orange}
        rotations={cubies[3].rotations || [0, 0, 0]}
      />
      <Cubie
        id={4}
        position={[0, 1, 1]}
        frontColour={"green"}
        topColour={"white"}
        rotations={cubies[4].rotations || [0, 0, 0]}
      />
    </group>
  );
};

export default Cube;
