import React from "react";
import "./menu.css";
import ToggleOll from "./toggleOll";
import TogglePll from "./togglePll";
import CrossColours from "./crossColours";
import ToggleAxis from "./toggleAxis";

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
        <ToggleAxis />
      </div>
    </div>
  );
}

export default Menu;
