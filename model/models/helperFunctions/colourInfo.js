const colourInfo = {
  w: { adjacent: ["r", "g", "o", "b"], opposite: "y" },
  y: { adjacent: ["r", "b", "o", "g"], opposite: "w" },
  r: { adjacent: ["w", "b", "y", "g"], opposite: "o" },
  o: { adjacent: ["w", "g", "y", "b"], opposite: "r" },
  b: { adjacent: ["w", "o", "y", "r"], opposite: "g" },
  g: { adjacent: ["w", "r", "y", "o"], opposite: "b" }
};

export default colourInfo;
