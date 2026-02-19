const reverse = (moves) => {
  const reversedMoves = [];
  for (let i = moves.length - 1; i >= 0; i--) {
    const move = moves[i];
    if (move[move.length - 1] === "'") {
      reversedMoves.push(move.slice(0, -1));
    } else if (move.endsWith("2")) {
      reversedMoves.push(move);
    } else {
      reversedMoves.push(move + "'");
    }
  }
  return reversedMoves;
};

export default reverse;
