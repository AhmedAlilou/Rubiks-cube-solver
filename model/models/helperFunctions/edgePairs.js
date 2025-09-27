const edgePairs = {
  // FRONT face edges
  "front[0][1]": { face: "top", row: 2, col: 1 },
  "front[1][0]": { face: "left", row: 1, col: 2 },
  "front[1][2]": { face: "right", row: 1, col: 0 },
  "front[2][1]": { face: "down", row: 0, col: 1 },

  // BACK face edges
  "back[0][1]": { face: "top", row: 0, col: 1 },
  "back[1][0]": { face: "right", row: 1, col: 2 },
  "back[1][2]": { face: "left", row: 1, col: 0 },
  "back[2][1]": { face: "down", row: 2, col: 1 },

  // LEFT face edges
  "left[0][1]": { face: "top", row: 1, col: 0 },
  "left[1][0]": { face: "back", row: 1, col: 2 },
  "left[1][2]": { face: "front", row: 1, col: 0 },
  "left[2][1]": { face: "down", row: 1, col: 0 },

  // RIGHT face edges
  "right[0][1]": { face: "top", row: 1, col: 2 },
  "right[1][0]": { face: "front", row: 1, col: 2 },
  "right[1][2]": { face: "back", row: 1, col: 0 },
  "right[2][1]": { face: "down", row: 1, col: 2 },

  // TOP face edges
  "top[0][1]": { face: "back", row: 0, col: 1 },
  "top[1][0]": { face: "left", row: 0, col: 1 },
  "top[1][2]": { face: "right", row: 0, col: 1 },
  "top[2][1]": { face: "front", row: 0, col: 1 },

  // BOTTOM face edges
  "down[0][1]": { face: "front", row: 2, col: 1 },
  "down[1][0]": { face: "left", row: 2, col: 1 },
  "down[1][2]": { face: "right", row: 2, col: 1 },
  "down[2][1]": { face: "back", row: 2, col: 1 }
};

export default edgePairs;
