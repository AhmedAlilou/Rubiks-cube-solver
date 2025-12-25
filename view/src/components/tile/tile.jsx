import { DoubleSide } from "three";

function Tile(props) {
  const isInside = props.colour === "#341539";

  const sizeArgs = isInside ? [1, 1] : [0.99, 0.99];

  return (
    <mesh position={props.position} rotation={props.rotation}>
      <planeGeometry args={sizeArgs} />
      <meshBasicMaterial color={props.colour} side={DoubleSide} />
    </mesh>
  );
}

export default Tile;
