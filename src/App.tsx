import "./App.css";

import { useState, ChangeEvent } from "react";
import classNames from "classnames";

import DropDown from "./components/DropDown/DropDown";

import data from "./data.json";

import { Note } from "./types";

function App() {
  const [activeScaleID, setActiveScaleID] = useState(1);

  const activeScale =
    data.scales.find((scale) => scale.id === activeScaleID) || data.scales[0];

  const accidentals =
    activeScale &&
    activeScale.notes
      .map((scaleNote) => {
        return data.notes.find((note) => note.id === scaleNote);
      })
      .filter((n) => n?.is_accidental).length;

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setActiveScaleID(Number(e.target.value));
  }

  function isNoteInScale(id: number): boolean {
    if (activeScale?.notes.includes(id)) return true;
    return false;
  }

  // TODO tests...
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
    <>
      <div className="flex flex-col">
        <section className="flex flex-col center flex-wrap content-center">
          <h2 className="text-3xl font-bold underline">
            Active Scale: {activeScale?.name}
          </h2>
          <div>
            <DropDown scales={data.scales} handleChange={handleChange} />
          </div>
          <div className="flex flex-row justify-center flex-wrap">
            {data.notes.map((note) => (
              <button key={note.id} className={getNoteClass(note)}>
                {note.string}
              </button>
            ))}
          </div>
          <div>
            <h4>Total Accidentals: {accidentals}</h4>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
