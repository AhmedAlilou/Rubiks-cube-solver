const removeContradictions = (moves) => {
  const simplifiedMoves = [];

  const countFor = (m) => {
    if (!m) return 0;
    if (m.length === 1) return 1;
    if (m[1] === "'") return -1;
    return 2;
  };

  for (let move of moves) {
    const lastMove = simplifiedMoves[simplifiedMoves.length - 1];
    if (lastMove && lastMove[0] === move[0]) {
      const lastMoveCount = countFor(lastMove);
      const currentMoveCount = countFor(move);
      const totalMoveCount = lastMoveCount + currentMoveCount;

      console.log(
        lastMove,
        lastMoveCount,
        currentMoveCount,
        totalMoveCount,
        simplifiedMoves
      );

      const rem = ((totalMoveCount % 4) + 4) % 4;
      if (rem === 0) {
        simplifiedMoves.pop();
      } else {
        let addition = "";
        if (rem === 1) addition = "";
        else if (rem === 2) addition = "2";
        else if (rem === 3) addition = "'";
        const newMove = move[0] + addition;
        // replace the last move instead of pushing a new one
        simplifiedMoves[simplifiedMoves.length - 1] = newMove;
      }
    } else {
      simplifiedMoves.push(move);
    }
  }

  return simplifiedMoves;
};

export default removeContradictions;
