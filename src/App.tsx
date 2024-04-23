import "./App.css";

import { useState, ChangeEvent } from "react";
import classNames from "classnames";

import DropDown from "./components/DropDown/DropDown";

import { getAccidentalsCount } from "./utils/helpers";

import data from "./data.json";

import { Note } from "./types";

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

  function isNoteInScale(id: number): boolean {
    if (activeScale?.notes.includes(id)) return true;
    return false;
  }

  function getNoteClass(note: Note): string {
    const { id, is_accidental } = note;
    return classNames("basis-1/4", {
      "bg-red-500": is_accidental && isNoteInScale(note.id),
      "bg-indigo-500": activeScale.root_note_id === id,
      "bg-indigo-500/50": isNoteInScale(id) && activeScale.root_note_id !== id,
      "bg-slate-100": !isNoteInScale(id),
    });
  }

  return (
    <div className="p-4 h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-xl font-bold text-center mb-16">
          Music Theory Practice
        </h1>
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-row items-baseline mb-8">
            {activeNotes.map((note) => (
              <button key={note.id} className={getNoteClass(note)}>
                {note.string}
              </button>
            ))}
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex">
              <h4 className="text-lg font-semibold underline mb-8 mr-2 font-sans no-underline">
                Active Scale:
              </h4>
              <DropDown scales={data.scales} handleChange={handleChange} />
            </div>
            <div className="">
              <h4 className="text-lg font-semibold">
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
