import React from "react";
import Solve from "./solve";
import useApplicationStore from "../../../store/applicationStore";

function Solution() {
  const scramble = useApplicationStore((state) => state.scramble);
  return (
    <div className="solution justify-between">
      <div className="mt-[4%] h-[15%]">Scramble: {scramble}</div>
      <Solve />
    </div>
  );
}

export default Solution;
