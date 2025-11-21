const cornerTrios = {
  // FRONT face corners
  "front[0][0]": [
    { face: "top", row: 2, col: 0 },
    { face: "left", row: 2, col: 2 }
  ],
  "front[0][2]": [
    { face: "top", row: 2, col: 2 },
    { face: "right", row: 0, col: 0 }
  ],
  "front[2][0]": [
    { face: "down", row: 0, col: 0 },
    { face: "left", row: 2, col: 2 }
  ],
  "front[2][2]": [
    { face: "down", row: 0, col: 2 },
    { face: "right", row: 2, col: 0 }
  ],

  // BACK face corners
  "back[0][0]": [
    { face: "top", row: 0, col: 2 },
    { face: "right", row: 0, col: 2 }
  ],
  "back[0][2]": [
    { face: "top", row: 0, col: 0 },
    { face: "left", row: 0, col: 0 }
  ],
  "back[2][0]": [
    { face: "down", row: 2, col: 2 },
    { face: "right", row: 2, col: 2 }
  ],
  "back[2][2]": [
    { face: "down", row: 2, col: 0 },
    { face: "left", row: 2, col: 0 }
  ],

  // LEFT face corners
  "left[0][0]": [
    { face: "top", row: 0, col: 0 },
    { face: "back", row: 0, col: 2 }
  ],
  "left[0][2]": [
    { face: "top", row: 2, col: 0 },
    { face: "front", row: 0, col: 0 }
  ],
  "left[2][0]": [
    { face: "down", row: 2, col: 0 },
    { face: "back", row: 2, col: 2 }
  ],
  "left[2][2]": [
    { face: "down", row: 0, col: 0 },
    { face: "front", row: 2, col: 0 }
  ],

  // RIGHT face corners
  "right[0][0]": [
    { face: "top", row: 2, col: 2 },
    { face: "front", row: 0, col: 2 }
  ],
  "right[0][2]": [
    { face: "top", row: 0, col: 2 },
    { face: "back", row: 0, col: 0 }
  ],
  "right[2][0]": [
    { face: "front", row: 2, col: 2 },
    { face: "down", row: 0, col: 2 }
  ],
  "right[2][2]": [
    { face: "down", row: 2, col: 2 },
    { face: "back", row: 2, col: 0 }
  ],

  // TOP face corners
  "top[0][0]": [
    { face: "back", row: 0, col: 2 },
    { face: "left", row: 0, col: 0 }
  ],
  "top[0][2]": [
    { face: "back", row: 0, col: 0 },
    { face: "right", row: 0, col: 2 }
  ],
  "top[2][0]": [
    { face: "left", row: 0, col: 2 },
    { face: "front", row: 0, col: 0 }
  ],
  "top[2][2]": [
    { face: "right", row: 0, col: 2 },
    { face: "front", row: 0, col: 2 }
  ],

  // DOWN face corners
  "down[0][0]": [
    { face: "front", row: 2, col: 0 },
    { face: "left", row: 2, col: 2 }
  ],
  "down[0][2]": [
    { face: "front", row: 2, col: 2 },
    { face: "right", row: 2, col: 0 }
  ],
  "down[2][0]": [
    { face: "back", row: 2, col: 2 },
    { face: "left", row: 2, col: 0 }
  ],
  "down[2][2]": [
    { face: "back", row: 2, col: 0 },
    { face: "right", row: 2, col: 2 }
  ]
};

export default cornerTrios;
