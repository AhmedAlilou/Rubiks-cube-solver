import React from "react";
import Piece from "../piece.jsx";

function Top() {
  return (
    <group position={[0, 0, 0]}>
      <Piece
        position={[0, 1, 1]}
        faceColours={{
          front: "green",
          right: null,
          top: "white",
          bottom: null,
          left: null,
          back: null
        }}
      />

      <Piece
        position={[1, 1, 1]}
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
        position={[1, 1, 0]}
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
        position={[1, 1, -1]}
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
        position={[0, 1, -1]}
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
        position={[-1, 1, -1]}
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
        position={[-1, 1, 0]}
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
        position={[-1, 1, 1]}
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
        position={[0, 1, 0]}
        faceColours={{
          front: null,
          right: null,
          top: "white",
          bottom: null,
          left: null,
          back: null
        }}
      />
    </group>
  );
}

export default Top;
