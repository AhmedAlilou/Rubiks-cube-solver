function rotateFace(face, clockwise) {
  // Deep copy to avoid mutating the original
  let newFace = face.map((row) => [...row]);
  if (clockwise) {
    // Transpose
    for (let i = 0; i < 3; i++) {
      for (let j = i; j < 3; j++) {
        [newFace[i][j], newFace[j][i]] = [newFace[j][i], newFace[i][j]];
      }
    }
    // Reverse each row
    for (let i = 0; i < 3; i++) {
      newFace[i].reverse();
    }
    return newFace;
  } else {
    // Reverse each row
    for (let i = 0; i < 3; i++) {
      newFace[i].reverse();
    }
    // Transpose
    for (let i = 0; i < 3; i++) {
      for (let j = i; j < 3; j++) {
        [newFace[i][j], newFace[j][i]] = [newFace[j][i], newFace[i][j]];
      }
    }
    return newFace;
  }
}

export default rotateFace;
