const generateScramble = (length) => {
  const moves = [
    ["U", "D"],
    ["L", "R"],
    ["F", "B"]
  ]; // split into 3 different axis
  const modifiers = ["", "'", "2"];
  let move = "";
  let scramble = [];
  let valid = false;
  let axis = [];
  let lastAxis = [];
  for (let i = 0; i < length; i++) {
    valid = false;
    0;
    while (!valid) {
      axis = Math.floor(Math.random() * moves.length);
      move = moves[axis][Math.floor(Math.random() * moves[axis].length)];
      if (axis !== lastAxis) {
        move += modifiers[Math.floor(Math.random() * modifiers.length)];
        lastAxis = axis;
        valid = true;
        break;
      }
    }
    scramble.push(move + " ");
  }
  return scramble;
};

export default generateScramble;
