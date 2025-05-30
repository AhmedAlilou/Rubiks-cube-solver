function setCol(face, colIndex, newValues) {
  return face.map((row, i) => {
    const newRow = [...row];
    newRow[colIndex] = newValues[i];
    return newRow;
  });
}

export default setCol;
