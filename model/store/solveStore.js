let crossColours = ["w"];
export function getCrossColours() {
  return crossColours;
}

export function setCrossColours(newCrossColours) {
  crossColours = newCrossColours;
}

let tempCrossSolution = [];

let crossSolution = [];

export function getTempCrossSolution() {
  return tempCrossSolution;
}

export function getCrossSolution() {
  return crossSolution;
}

export function setTempCrossSolution(moves) {
  tempCrossSolution = moves;
}

export function setCrossSolution(moves) {
  crossSolution = moves;
}
