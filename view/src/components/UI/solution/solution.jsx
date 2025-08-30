import React from "react";
import useScrambleStore from "../../../store/scrambleStore";

function Solution() {
  const scramble = useScrambleStore((state) => state.scramble);
  return (
    <div className="solution">
      <div className="mt-[2%]">Solution {scramble}</div>
    </div>
  );
}

export default Solution;
