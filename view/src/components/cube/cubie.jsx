import Tile from "../tile/tile.jsx";

const PI = Math.PI;
const orange = "#FF6500"; // default Threejs orange colour is bad

const Cubie = (props) => {
  return (
    <group position={[0, 0, 1]}>
      <Tile colour={"green"} rotation={[0, 0, 0]} position={[0, 0, 1]} />
      <Tile colour={"red"} rotation={[0, PI / 2, 0]} position={[0.5, 0, 0.5]} />
      <Tile
        colour={orange}
        rotation={[0, PI / 2, 0]}
        position={[-0.5, 0, 0.5]}
      />
      <Tile colour={"blue"} rotation={[0, 0, 0]} position={[0, 0, 0]} />
      <Tile
        colour={"white"}
        rotation={[PI / 2, 0, 0]}
        position={[0, 0.5, 0.5]}
      />
      <Tile
        colour={"yellow"}
        rotation={[PI / 2, 0, 0]}
        position={[0, -0.5, 0.5]}
      />
    </group>
  );
};

export default Cubie;
