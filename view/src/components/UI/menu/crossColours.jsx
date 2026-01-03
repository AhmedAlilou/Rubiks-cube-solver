import { useEffect, useState } from "react";
import {
  getCrossColours,
  setCrossColours,
  subscribeSolveStore
} from "../../../../../model/store/solveStore";
import "./menu.css";

const COLOR_MAP = {
  w: "#ffffff",
  y: "#facc15",
  o: "#fb923c",
  g: "#10b981",
  b: "#3b82f6",
  r: "#ef4444"
};

const ALL = ["w", "y", "o", "g", "b", "r"];

function CrossColours() {
  const initial =
    getCrossColours && typeof getCrossColours === "function"
      ? getCrossColours()
      : ALL;
  const [selected, setSelected] = useState(initial || ALL);

  useEffect(() => {
    // subscribe to external changes
    const unsub = subscribeSolveStore(() => {
      const latest = getCrossColours();
      if (latest && Array.isArray(latest)) setSelected(latest);
    });
    return unsub;
  }, []);

  const toggle = (code) => {
    const has = selected.includes(code);
    if (has) {
      if (selected.length === 1) return; // enforce at least one selected
      const next = selected.filter((c) => c !== code);
      setSelected(next);
      setCrossColours(next);
    } else {
      const next = [...selected, code];
      setSelected(next);
      setCrossColours(next);
    }
  };

  return (
    <div className="crossColoursContainer flex flex-col">
      <div className="crossColoursTitle"> Select cross colours</div>
      <div className="flex flex-row gap-[1vw]">
        {ALL.map((code) => (
          <div className="crossOption" key={code} onClick={() => toggle(code)}>
            <div
              className="swatch"
              style={{
                backgroundColor: COLOR_MAP[code],
                border: code === "w" ? "1px solid #c7c7c7" : undefined
              }}
            />
            <input
              type="checkbox"
              checked={selected.includes(code)}
              readOnly
              className="crossCheckbox"
              aria-label={code}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrossColours;
