import "./menu.css";
import ToggleOll from "./toggleOll";
import TogglePll from "./togglePll";
import CrossColours from "./crossColours";
import ToggleAxis from "./toggleAxis";
import ScrambleLength from "./scrambleLength";
import useApplicationStore from "../../../store/applicationStore";

function Menu() {
  const setShowHelpModal = useApplicationStore(
    (state) => state.setShowHelpModal
  );

  return (
    <div className="menu flex flex-row gap-[2vw] w-[20%] align-center">
      <div className="toggles flex flex-col h-[100%] justify-around">
        <ToggleOll />
        <TogglePll />
        <ToggleAxis />
      </div>
      <CrossColours />
      <ScrambleLength />
      <div className="linksContainer flex flex-col h-[100%] justify-around">
        <a
          href="https://jperm.net/algs/oll"
          target="_blank"
          rel="noopener noreferrer"
          className="algLink"
        >
          View OLLs
        </a>
        <a
          href="https://jperm.net/algs/pll"
          target="_blank"
          rel="noopener noreferrer"
          className="algLink"
        >
          View PLLs
        </a>
      </div>
      <button
        className="helpButton"
        onClick={() => setShowHelpModal(true)}
        title="View help and instructions"
      >
        ?
      </button>
    </div>
  );
}

export default Menu;
