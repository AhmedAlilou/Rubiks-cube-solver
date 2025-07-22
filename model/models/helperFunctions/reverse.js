const reverse = (matrix) => {
  return matrix
    .slice()
    .reverse()
    .map((row) => row.slice().reverse());
};

export default reverse;
