const formatAlg = (string) => {
  const moves = string.trim();
  const sequence = [];
  let currentMove = "";

  for (let i = 0; i < moves.length; i++) {
    const char = moves[i];
    if (char === " ") {
      // space between moves
      sequence.push(currentMove);
      currentMove = "";
    } else {
      currentMove += char;
    }

    if (i == moves.length - 1) {
      sequence.push(currentMove);
    }
  }
  return sequence;
};

export default formatAlg;
