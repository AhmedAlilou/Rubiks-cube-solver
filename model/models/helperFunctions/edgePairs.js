const edgePairs = {
  "front[0][1]": "top[2][1]",
  "front[1][0]": "left[1][2]",
  "front[1][2]": "right[1][0]",
  "front[2][1]": "bottom[0][1]",
  "back[0][1]": "top[0][1]",
  "back[1][0]": "right[1][2]",
  "back[1][2]": "left[1][0]",
  "back[2][1]": "bottom[2][1]",
  "left[0][1]": "top[1][0]",
  "left[2][1]": "bottom[1][0]",
  "right[0][1]": "top[1][2]",
  "right[2][1]": "bottom[1][2]"
};

// Add reverse pairs so I can look for top[2][1] and get front[0][1] for example
Object.entries(edgePairs).forEach(([a, b]) => {
  edgePairs[b] = a;
});

export default edgePairs;
