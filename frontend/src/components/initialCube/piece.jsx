import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Piece = ({ position, faceColours = {} }) => {
  const groupRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [targetRotation, setTargetRotation] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  useFrame((_, delta) => {
    if (currentRotation !== targetRotation) {
      const step = delta * 5;
      const newRotation = Math.min(targetRotation, currentRotation + step);
      setCurrentRotation(newRotation);
      groupRef.current.rotation.y = newRotation;
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    setTargetRotation(targetRotation + Math.PI / 2);
  };

  const materials = [
    <meshBasicMaterial
      attach="material-0"
      color={faceColours.right || "#333333"}
    />, // +X
    <meshBasicMaterial
      attach="material-1"
      color={faceColours.left || "#333333"}
    />, // -X
    <meshBasicMaterial
      attach="material-2"
      color={faceColours.top || "#333333"}
    />, // +Y
    <meshBasicMaterial
      attach="material-3"
      color={faceColours.bottom || "#333333"}
    />, // -Y
    <meshBasicMaterial
      attach="material-4"
      color={faceColours.front || "#333333"}
    />, // +Z
    <meshBasicMaterial
      attach="material-5"
      color={faceColours.back || "#333333"}
    /> // -Z
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh
        position={position}
        onClick={handleClick}
        onPointerEnter={(event) => (
          event.stopPropagation(), setIsHovered(true)
        )}
        onPointerLeave={(event) => (
          event.stopPropagation(), setIsHovered(false)
        )}
      >
        <boxGeometry args={[1, 1, 1]} />
        {materials}
      </mesh>
    </group>
  );
};

export default Piece;
