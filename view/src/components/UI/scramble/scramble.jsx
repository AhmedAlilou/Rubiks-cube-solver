import React from "react";
import ScrambleButton from "./scramblebutton";

function Scramble() {
  return (
    <div className="scramble h-[8vh] w-[100vw] mt-[2vh] flex flex-row justify-center">
      <div className="w-[70vw]">
        <form>
          <label>
            Enter your scramble or click generate for a random one:
            <input
              className="scrambleinput h-[3vh] w-[32vw] ml-[1vw]"
              type="text"
              placeholder="Enter custom scramble here!"
            />
          </label>
        </form>
      </div>
      <div className="flex flex-row w-[25vw] justify-start">
        <ScrambleButton text="Enter" />
        <ScrambleButton text="Generate" />
      </div>
    </div>
  );
}

export default Scramble;
