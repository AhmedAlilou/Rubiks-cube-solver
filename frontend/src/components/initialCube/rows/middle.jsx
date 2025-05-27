import React from "react";
import Piece from "../piece.jsx";

function Middle() {
  return (
    <group position={[0, 0, 0]}>
      <Piece
        position={[0, 0, 1]}
        faceColours={{
          front: "green",
          right: null,
          top: null,
          bottom: null,
          left: null,
          back: null
        }}
      />

      <Piece
        position={[1, 0, 1]}
        type={"edge"}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
      <Piece
        position={[1, 0, 0]}
        type={"edge"}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
      <Piece
        position={[1, 0, -1]}
        type={"edge"}
        size={[1, 1, 1]}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
      <Piece
        position={[0, 0, -1]}
        type={"centre"}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
      <Piece
        position={[-1, 0, -1]}
        type={"edge"}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
      <Piece
        position={[-1, 0, 0]}
        type={"edge"}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
      <Piece
        position={[-1, 0, 1]}
        type={"edge"}
        faceColours={{
          front: "green",
          right: "red",
          top: "white",
          bottom: "#FFFF00",
          left: "#FF4D00",
          back: "blue"
        }}
      />
    </group>
  );
}

export default Middle;
