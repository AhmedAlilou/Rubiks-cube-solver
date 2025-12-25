import React from "react";
import "./menu.css";
import ToggleOll from "./toggleOll";
import TogglePll from "./togglePll";
import CrossColours from "./crossColours";

function Menu() {
  return (
    <div className="menu">
      <div style={{ padding: "0.5rem" }}>Menu</div>
      <div className="flex flex-col">
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <ToggleOll />
          <TogglePll />
        </div>
        <CrossColours />
      </div>
    </div>
  );
}

export default Menu;
