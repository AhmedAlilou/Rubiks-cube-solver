let crossColours = ["w", "y", "o", "g", "b", "r"]; // make white default always there because everyone can do it
let solutionCrossColour = crossColours[0];
let twoLookOLL = false;
let twoLookPLL = false;

let tempCrossSolution = [];
let crossSolution = [];

let tempF2lSolution = [];
let f2lSolution = [];

let ollSolution = [];

let pllSolution = [];

export function getTwoLookOLL() {
  return twoLookOLL;
}

export function setTwoLookOLL(value) {
  twoLookOLL = value;
}

export function getTwoLookPLL() {
  return twoLookPLL;
}

export function setTwoLookPLL(value) {
  twoLookPLL = value;
}

export function getCrossColours() {
  return crossColours;
}

export function getSolutionCrossColour() {
  return solutionCrossColour;
}

export function setSolutionCrossColour(newColour) {
  solutionCrossColour = newColour;
}

export function setCrossColours(newCrossColours) {
  crossColours = newCrossColours;
}

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

export function setF2lSolution(moves) {
  f2lSolution = moves;
}

export function getTempF2lSolution() {
  return tempF2lSolution;
}

export function getF2lSolution() {
  return f2lSolution;
}

export function setTempF2lSolution(moves) {
  tempF2lSolution = moves;
}

export function getOllSolution() {
  return ollSolution;
}

export function setOllSolution(moves) {
  ollSolution = moves;
}

export function getPllSolution() {
  return pllSolution;
}

export function setPllSolution(moves) {
  pllSolution = moves;
}
