import React from "react";

function Scramble() {
  return (
    <div className="h-[5vh] w-[90vw] mt-[2vh] ">
      <form>
        <label>
          Enter your scramble or click generate for a random one:
          <input
            className="scrambleinput h-[3vh] w-[30vw] ml-[1vw]"
            type="text"
            placeholder="Enter custom scramble here!"
          />
        </label>
      </form>
    </div>
  );
}

export default Scramble;
