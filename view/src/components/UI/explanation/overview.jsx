import React from "react";

function Overview({ crossLength, f2lLength, ollLength, pllLength }) {
  const totalMoves = crossLength + f2lLength + ollLength + pllLength;

  // Only display if we have move data
  if (totalMoves === 0) {
    return <div>No solve data available</div>;
  }

  return (
    <div>
      <p>Cross: {crossLength} moves</p>
      <p>F2L: {f2lLength} moves</p>
      <p>OLL: {ollLength} moves</p>
      <p>PLL: {pllLength} moves</p>
      <p>
        <strong>Total: {totalMoves} moves</strong>
      </p>
    </div>
  );
}

export default Overview;
