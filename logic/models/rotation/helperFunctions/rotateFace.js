function rotateFace(face, clockWise) {
  // 1. Transpose the matrix
  if (clockWise) {
    for (let i = 0; i < 3; i++) {
      for (let j = i; j < 3; j++) {
        [face[i][j], face[j][i]] = [face[j][i], face[i][j]];
      }
    }

    // 2. Swap first and last columns
    for (let i = 0; i < 3; i++) {
      face[i].reverse();
    }

    return face;
  } else {
    // If not clockwise, we will rotate anti-clockwise
    // 1. Swap first and last columns
    for (let i = 0; i < 3; i++) {
      face[i].reverse();
    }
    // 2. Transponse the matrix
    for (let i = 0; i < 3; i++) {
      for (let j = i; j < 3; j++) {
        [face[i][j], face[j][i]] = [face[j][i], face[i][j]];
      }
    }
    return face;
  }
}

// antilockwise here too

export default rotateFace;
