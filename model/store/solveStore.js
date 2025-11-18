let crossColours = ["w"]; // make white default always there because everyone can do it
export function getCrossColours() {
  return crossColours;
}

let solutionCrossColour = crossColours[0];

export function getSolutionCrossColour() {
  return solutionCrossColour;
}

export function setSolutionCrossColour(newColour) {
  solutionCrossColour = newColour;
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
