import React from "react";
import "./menu.css";
import ToggleOll from "./toggleOll";
import TogglePll from "./togglePll";

function Menu() {
  return (
    <div className="menu">
      <div style={{ padding: "0.5rem" }}>Menu</div>
      <div className="flex flex-col">
        <ToggleOll />
        <TogglePll />
      </div>
    </div>
  );
}

export default Menu;
