function setRow(face, rowIndex, newValues) {
  const newFace = face.map((row) => [...row]);
  newFace[rowIndex] = newValues;
  return newFace;
}

export default setRow;
