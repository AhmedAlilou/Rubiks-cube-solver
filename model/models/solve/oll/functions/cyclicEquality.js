import rotateFace from "../../../helperFunctions/rotateFace";

const cyclicEquality = (top, sideRows, top2, sideRows2) => {
  let count = 0;
  let newTop = top;
  let newSideRows = sideRows;
  let equal = false;
  while (count < 4 && !equal) {
    if (
      JSON.stringify(newTop) === JSON.stringify(top2) &&
      JSON.stringify(newSideRows) === JSON.stringify(sideRows2)
    ) {
      equal = true;
      return [true, count];
    }
    newTop = rotateFace(newTop, true);
    newSideRows = [newSideRows[3], ...newSideRows.slice(0, 3)];
    count++;
  }
  return [equal, count];
};

export default cyclicEquality;
