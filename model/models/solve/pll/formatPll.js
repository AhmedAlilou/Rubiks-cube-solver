import colourInfo from "../../helperFunctions/colourInfo";

const formatPll = (rows, colour) => {
  rows;
  const first = rows[0][0];
  const third = colourInfo[first].opposite;

  const colours = colourInfo[colour].adjacent;

  const identifySecond = () => {
    switch (first) {
      case colours[0]:
        return colours[3];
      case colours[1]:
        return colours[0];
      case colours[2]:
        return colours[1];
      case colours[3]:
        return colours[2];
      default:
        break;
    }
  };

  const second = identifySecond();
  const fourth = colourInfo[second].opposite;

  let output = [[], [], [], []];

  for (let side = 0; side < 4; side++) {
    for (let col = 0; col < 3; col++) {
      switch (rows[side][col]) {
        case first:
          output[side].push(1);
          break;
        case second:
          output[side].push(2);
          break;
        case third:
          output[side].push(3);
          break;
        case fourth:
          output[side].push(4);
          break;
      }
    }
  }

  output;
  return output;
};

export default formatPll;
