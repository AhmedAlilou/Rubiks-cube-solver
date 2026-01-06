import React, { useState } from "react";
import "../UI.css";
import ScrambleButton from "./scramblebutton";

function Scramble() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="scramble w-[65vw] mt-[2vh]">
      <label className="w-[40vw]">
        Enter or randomly generate a scramble:
        <input
          className="scrambleinput h-[3vh] w-[32vw] p-0"
          id="scrambleInput"
          type="text"
          placeholder="Enter custom scramble here!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <div className="scramblebuttons gap-2">
        <ScrambleButton type="enter" text="Enter" inputValue={inputValue} />
        <ScrambleButton type="generate" text="Generate" />
      </div>
    </div>
  );
}

export default Scramble;
