import { EdgePiece, CornerPiece, CentrePiece } from "./piece.js"; // Note the .js extension

const cubePieces = {
  C1: new CornerPiece(["r", "g", "w"], "C1"),
  C2: new CornerPiece(["g", "o", "w"], "C2"),
  C3: new CornerPiece(["o", "b", "w"], "C3"),
  C4: new CornerPiece(["b", "r", "w"], "C4"),
  C5: new CornerPiece(["r", "g", "y"], "C5"),
  C6: new CornerPiece(["g", "o", "y"], "C6"),
  C7: new CornerPiece(["o", "b", "y"], "C7"),
  C8: new CornerPiece(["b", "r", "y"], "C8"),
  E1: new EdgePiece(["r", "w"], "E1"),
  E2: new EdgePiece(["g", "w"], "E2"),
  E3: new EdgePiece(["g", "o"], "E3"),
  E4: new EdgePiece(["o", "w"], "E4"),
  E5: new EdgePiece(["o", "y"], "E5"),
  E6: new EdgePiece(["g", "y"], "E6"),
  E7: new EdgePiece(["r", "y"], "E7"),
  E8: new EdgePiece(["b", "y"], "E8"),
  E9: new EdgePiece(["b", "w"], "E9"),
  E10: new EdgePiece(["r", "b"], "E10"),
  E11: new EdgePiece(["g", "b"], "E11"),
  E12: new EdgePiece(["r", "o"], "E12"),
  f: new CentrePiece("g", "M1"),
  t: new CentrePiece("w", "M2"),
  l: new CentrePiece("o", "M3"),
  r: new CentrePiece("r", "M4"),
  b: new CentrePiece("b", "M5"),
  d: new CentrePiece("y", "M6")
};

export default cubePieces;
