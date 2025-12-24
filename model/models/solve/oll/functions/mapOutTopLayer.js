const mapOutTopLayer = (cube) => {
  let tempCube = cube;
  const firstRow = tempCube["front"][0];
  const secondRow = tempCube["left"][0];
  const thirdRow = tempCube["back"][0];
  const fourthRow = tempCube["right"][0];
  const topFace = tempCube["top"];

  const corners = [
    tempCube["top"][0][0],
    tempCube["top"][0][2],
    tempCube["top"][2][2],
    tempCube["top"][2][0]
  ];
  const edges = [
    tempCube["top"][0][1],
    tempCube["top"][1][2],
    tempCube["top"][2][1],
    tempCube["top"][1][0]
  ];

  const sideRows = [firstRow, secondRow, thirdRow, fourthRow];
  return {
    topFace: topFace,
    sideRows: sideRows,
    corners: corners,
    edges: edges
  };
};

export default mapOutTopLayer;
