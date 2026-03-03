import React from "react";
import "./menu.css";
import ToggleOll from "./toggleOll";
import TogglePll from "./togglePll";
import CrossColours from "./crossColours";
import ToggleAxis from "./toggleAxis";
import ScrambleLength from "./scrambleLength";

function Menu() {
  return (
    <div className="menu flex flex-row gap-[2vw] align-center">
      <div className="toggles flex flex-col h-[100%] justify-around">
        <ToggleOll />
        <TogglePll />
        <ToggleAxis />
      </div>
      <CrossColours />
      <ScrambleLength />
    </div>
  );
}

export default Menu;
