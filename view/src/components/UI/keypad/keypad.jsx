import F from "./regular/F.jsx";
import FPrime from "./regular/F'.jsx";
import R from "./regular/R.jsx";
import RPrime from "./regular/R'.jsx";
import U from "./regular/U.jsx";
import UPrime from "./regular/U'.jsx";
import D from "./regular/D.jsx";
import DPrime from "./regular/D'.jsx";
import L from "./regular/L.jsx";
import LPrime from "./regular/L'.jsx";
import B from "./regular/B.jsx";
import BPrime from "./regular/B'.jsx";
import X from "./rotation/x.jsx";
import XPrime from "./rotation/x'.jsx";
import Y from "./rotation/y.jsx";
import YPrime from "./rotation/y'.jsx";
import Z from "./rotation/z.jsx";
import ZPrime from "./rotation/z'.jsx";
import M from "./slice/M.jsx";
import MPrime from "./slice/M'.jsx";
import E from "./slice/E.jsx";
import EPrime from "./slice/E'.jsx";
import S from "./slice/S.jsx";
import SPrime from "./slice/S'.jsx";
import Wb from "./wide/b.jsx";
import WbPrime from "./wide/b'.jsx";
import Wd from "./wide/d.jsx";
import WdPrime from "./wide/d'.jsx";
import Wf from "./wide/f.jsx";
import WfPrime from "./wide/f'.jsx";
import Wl from "./wide/l.jsx";
import WlPrime from "./wide/l'.jsx";
import Wr from "./wide/r.jsx";
import WrPrime from "./wide/r'.jsx";
import Wu from "./wide/u.jsx";
import WuPrime from "./wide/u'.jsx";
import Toggle from "./toggle.jsx";
import Undo from "./undo.jsx";
import Subheading from "./subheading.jsx";

function Keypad() {
  return (
    <div className="keypad grid grid-cols-6 grid-rows-17 w-[24vw] mx-[1.5vw] gap-4">
      <div className=" col-span-6 row-span-2 gap-[0.8vw] flex flex-row">
        <Subheading text={"Regular turns"} />
        <Toggle />
        <Undo />
      </div>
      <div className="buttons row-span-2 flex flex-row col-span-6 justify-between">
        <F />
        <FPrime />

        <R />
        <RPrime />

        <U />
        <UPrime />
      </div>
      <div className="buttons row-span-2 flex flex-row col-span-6">
        <D />
        <DPrime />

        <L />
        <LPrime />

        <B />
        <BPrime />
      </div>
      <div className="col-span-6 h-[2vh] row-span-">
        <Subheading text={"Rotations"} />
      </div>
      <div className="buttons row-span-2 flex flex-row col-span-6">
        <X />
        <XPrime />

        <Y />
        <YPrime />
        <Z />
        <ZPrime />
      </div>
      <div className="col-span-6">
        <Subheading text={"Slice turns"} />
      </div>
      <div className="buttons row-span-2 flex flex-row col-span-6">
        <M />
        <MPrime />
        <E />
        <EPrime />
        <S />
        <SPrime />
      </div>
      <div className="col-span-6">
        <Subheading text={"Wide turns"} />
      </div>
      <div className="buttons row-span-2 flex flex-row col-span-6">
        <Wb />
        <WbPrime />
        <Wd />
        <WdPrime />
        <Wf />
        <WfPrime />
      </div>
      <div className="buttons row-span-2 flex flex-row col-span-6">
        <Wl />
        <WlPrime />

        <Wr />
        <WrPrime />
        <Wu />
        <WuPrime />
      </div>
    </div>
  );
}

export default Keypad;
