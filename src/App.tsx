import "./App.css";

import { useState, ChangeEvent } from "react";

import DropDown from "./components/DropDown/DropDown";
import Notes from "./components/Notes/Notes";

import { getAccidentalsCount } from "./utils/helpers";

import data from "./data.json";

import { getNotesInActiveScale } from "./utils/helpers";

function App() {
  const [activeScaleID, setActiveScaleID] = useState(1);

  const activeScale =
    data.scales.find((scale) => scale.id === activeScaleID) || data.scales[0];

  const accidentalsCount = getAccidentalsCount(activeScale, data.notes);

  const activeNotes = getNotesInActiveScale(data.notes, activeScale) || [];

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setActiveScaleID(Number(e.target.value));
  }

  return (
    <div className="p-4 h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center mb-16 text-sky-500/100">
          Music Theory Practice
        </h1>
        <div className="flex flex-col justify-evenly">
          <Notes activeNotes={activeNotes} activeScale={activeScale} />
          <div className="flex flex-row justify-evenly">
            <div className="flex">
              <h4 className="text-lg font-semibold underline mb-8 mr-2 font-sans no-underline text-sky-500/100">
                Active Scale:
              </h4>
              <DropDown scales={data.scales} handleChange={handleChange} />
            </div>
            <div className="">
              <h4 className="text-lg font-semibold text-sky-500/100">
                Total Accidentals: {accidentalsCount}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
