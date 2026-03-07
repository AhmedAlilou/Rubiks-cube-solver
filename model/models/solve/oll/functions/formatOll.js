const formatOll = (top = [], sideRows = [], colour) => {
  ("FORMAT OLL INITIATED");
  top;

  const clonedTop = (top || []).map((row) => row.slice());
  const clonedSideRows =
    sideRows && sideRows.length
      ? sideRows.map((row) => row.slice())
      : [[], [], [], []];

  const numericTop = clonedTop.map((row) =>
    row.map((cell) => (cell === colour ? 1 : 0))
  );

  const numericSideRows = clonedSideRows.map((row) =>
    row.map((cell) => (cell === colour ? 1 : 0))
  );

  return [numericTop, numericSideRows];
};

export default formatOll;
