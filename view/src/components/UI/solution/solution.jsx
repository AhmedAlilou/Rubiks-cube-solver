import React from "react";
import { getScramble } from "../../../../../global/store/globalStore";

function Solution() {
  const scramble = getScramble();
  return (
    <div className="solution">
      <div className="mt-[2%]">Solution {scramble}</div>
    </div>
  );
}

export default Solution;
