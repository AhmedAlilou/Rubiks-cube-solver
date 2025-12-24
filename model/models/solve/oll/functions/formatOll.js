const formatOll = (top = [], sideRows = [], colour) => {
  console.log("FORMAT OLL INITIATED");
  console.log(top);

  // Deep-clone the rows so we don't mutate the original cube data
  const clonedTop = (top || []).map((row) => row.slice());
  const clonedSideRows =
    sideRows && sideRows.length
      ? sideRows.map((row) => row.slice())
      : [[], [], [], []];

  // Convert to numeric representation (1 = matches colour, 0 = not)
  const numericTop = clonedTop.map((row) =>
    row.map((cell) => (cell === colour ? 1 : 0))
  );

  const numericSideRows = clonedSideRows.map((row) =>
    row.map((cell) => (cell === colour ? 1 : 0))
  );

  return [numericTop, numericSideRows];
};

export default formatOll;
