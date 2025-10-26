const colourInfo = {
  w: { face: "w", adjacent: ["r", "g", "o", "b"], opposite: "y" },
  y: { face: "y", adjacent: ["r", "b", "o", "g"], opposite: "w" },
  r: { face: "r", adjacent: ["w", "b", "y", "g"], opposite: "o" },
  o: { face: "o", adjacent: ["w", "g", "y", "b"], opposite: "r" },
  b: { face: "b", adjacent: ["w", "o", "y", "r"], opposite: "g" },
  g: { face: "g", adjacent: ["w", "r", "y", "o"], opposite: "b" }
};

export default colourInfo;
