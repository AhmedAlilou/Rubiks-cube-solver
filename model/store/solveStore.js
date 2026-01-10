let crossColours = ["w", "y", "o", "g", "b", "r"];

let solutionCrossColour = crossColours[0];
let twoLookOll = false;
let twoLookPll = false;

let tempCrossSolution = [];
let crossSolution = [];

let tempF2lSolution = [];
let f2lSolution = [];

let ollSolution = [];

let pllSolution = [];

let solution = [[], [], [], []];

export function getSolution() {
  return solution;
}

export function setSolution(newSolution) {
  solution = newSolution;
  return solution;
}

// simple subscription system so UI can react to changes
const _listeners = new Set();

export function subscribeSolveStore(fn) {
  _listeners.add(fn);
  return () => _listeners.delete(fn);
}

function _notify() {
  _listeners.forEach((fn) => {
    try {
      fn();
    } catch (e) {
      // ignore listener errors
    }
  });
}
export function getTwoLookOll() {
  return twoLookOll;
}

export function setTwoLookOll(value) {
  twoLookOll = value;
  _notify();
}

export function getTwoLookPll() {
  return twoLookPll;
}

export function setTwoLookPll(value) {
  twoLookPll = value;
  _notify();
}

export function getCrossColours() {
  return crossColours;
}

export function getSolutionCrossColour() {
  return solutionCrossColour;
}

export function setSolutionCrossColour(newColour) {
  solutionCrossColour = newColour;
  _notify();
}

export function setCrossColours(newCrossColours) {
  crossColours = newCrossColours;
  _notify();
}

export function getTempCrossSolution() {
  return tempCrossSolution;
}

export function getCrossSolution() {
  return crossSolution;
}

export function setTempCrossSolution(moves) {
  tempCrossSolution = moves;
  _notify();
}

export function setCrossSolution(moves) {
  crossSolution = moves;
  _notify();
}

export function setF2lSolution(moves) {
  f2lSolution = moves;
  _notify();
}

export function getTempF2lSolution() {
  return tempF2lSolution;
}

export function getF2lSolution() {
  return f2lSolution;
}

export function setTempF2lSolution(moves) {
  tempF2lSolution = moves;
  _notify();
}

export function getOllSolution() {
  return ollSolution;
}

export function setOllSolution(moves) {
  ollSolution = moves;
  _notify();
}

export function getPllSolution() {
  return pllSolution;
}

export function setPllSolution(moves) {
  pllSolution = moves;
  _notify();
}

let pointer = 0;

export function getPointer() {
  return pointer;
}

export function setPointer(newPointer) {
  pointer = newPointer;
  return pointer;
}
