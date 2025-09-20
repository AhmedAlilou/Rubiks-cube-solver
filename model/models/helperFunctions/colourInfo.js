const colourInfo = {
  w: { adjacent: ["r", "b", "o", "g"], opposite: "y" },
  y: { adjacent: ["r", "g", "o", "b"], opposite: "w" },
  r: { adjacent: ["w", "b", "y", "g"], opposite: "o" },
  o: { adjacent: ["w", "g", "y", "b"], opposite: "r" },
  b: { adjacent: ["w", "r", "y", "o"], opposite: "g" },
  g: { adjacent: ["w", "o", "y", "r"], opposite: "b" }
};

export default colourInfo;
