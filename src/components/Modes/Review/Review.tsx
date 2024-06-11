import { useState, ChangeEvent } from "react";
import data from "@data";

import { getNotesInActiveScale, getAccidentalsCount } from "@utils/helpers";

import Notes from "@components/Notes/Notes";
import DropDown from "@components/DropDown/DropDown";

export default function Review() {
  const [activeScaleID, setActiveScaleID] = useState(1);

  const activeScale =
    data.scales.find((scale) => scale.id === activeScaleID) || data.scales[0];

  const accidentalsCount = getAccidentalsCount(activeScale, data.notes);

  const activeNotes = getNotesInActiveScale(data.notes, activeScale) || [];

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setActiveScaleID(Number(e.target.value));
  }
  return (
    <div className="flex flex-col justify-evenly">
      <Notes activeNotes={activeNotes} activeScale={activeScale} />
      <div className="flex flex-row justify-evenly">
        <div className="flex">
          <DropDown scales={data.scales} handleChange={handleChange} />
        </div>
        <div className="">
          <h4 className="text-lg font-semibold text-sky-500/100">
            Total Accidentals: {accidentalsCount}
          </h4>
        </div>
      </div>
    </div>
  );
}
