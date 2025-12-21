const cyclicEquality = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let count = 0;

  const n = array1.length;

  // Helper to relabel numbers 1→2→3→4→1
  const relabel = (arr) => arr.map((row) => row.map((num) => (num % 4) + 1));

  // Generate all 4 relabelings
  let relabeledArrays = [array1];
  for (let i = 1; i < 4; i++) {
    relabeledArrays.push(relabel(relabeledArrays[i - 1]));
  }

  // Check each relabeling with all rotations
  for (const relabeled of relabeledArrays) {
    let rotated = relabeled.map((row) => [...row]);

    for (let j = 0; j < n; j++) {
      if (JSON.stringify(rotated) === JSON.stringify(array2)) {
        console.log("count is ", j);
        return [true, j];
      }
      rotated.push(rotated.shift()); // rotate rows
    }
    count++;
  }

  return false;
};

export default cyclicEquality;
