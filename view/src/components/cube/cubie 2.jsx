import React from "react";
import { mesh } from "three";
import { BoxGeometry, MeshStandardMaterial } from "three";

function CubieMesh({ position, id }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
