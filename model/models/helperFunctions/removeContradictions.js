const removeContradictions = (moves) => {
  const simplifiedMoves = [];

  const countFor = (move) => {
    if (!move) return 0;
    if (move.length === 1) return 1;
    if (move[1] === "'") return -1;
    return 2;
  };

  for (let move of moves) {
    const lastMove = simplifiedMoves[simplifiedMoves.length - 1];
    if (lastMove && lastMove[0] === move[0]) {
      const lastMoveCount = countFor(lastMove);
      const currentMoveCount = countFor(move);
      const totalMoveCount = lastMoveCount + currentMoveCount;

      (lastMove,
        lastMoveCount,
        currentMoveCount,
        totalMoveCount,
        simplifiedMoves);

      const remainder = ((totalMoveCount % 4) + 4) % 4;
      if (remainder === 0) {
        simplifiedMoves.pop();
      } else {
        let addition = "";
        if (remainder === 1) addition = "";
        else if (remainder === 2) addition = "2";
        else if (remainder === 3) addition = "'";
        const newMove = move[0] + addition;
        simplifiedMoves[simplifiedMoves.length - 1] = newMove;
      }
    } else {
      simplifiedMoves.push(move);
    }
  }

  return simplifiedMoves;
};

export default removeContradictions;
