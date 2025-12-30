const generatePermutations = (toSolve) => {
  let permutations = [];
  const length = toSolve.length;

  "Generating permutations for:", toSolve;

  if (length === 0) return [[]];
  if (length === 1) return [toSolve];

  for (let i = 0; i < length; i++) {
    const current = toSolve[i];
    const remaining = toSolve.slice(0, i).concat(toSolve.slice(i + 1));
    const remainingPerms = generatePermutations(remaining);

    for (const perm of remainingPerms) {
      permutations.push([current, ...perm]);
    }
  }

  "Generated Permutations:", permutations;
  return permutations;
};

export default generatePermutations;
