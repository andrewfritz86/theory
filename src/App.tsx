import "./App.css";

import { useState, ChangeEvent } from "react";

import DropDown from "./components/DropDown/DropDown";

import data from "./data.json";

function App() {
  const [activeScaleID, setActiveScaleID] = useState(1);

  const activeScale = data.scales.find((scale) => scale.id === activeScaleID);

  function handleClick(id: number): void {
    console.log(id);
  }

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setActiveScaleID(Number(e.target.value));
  }

  function isNoteInScale(id: number): boolean {
    if (activeScale?.notes.includes(id)) return true;
    return false;
  }

  function getNoteClass(id: number): string {
    if (activeScale?.root_note_id === id) return "basis-1/4 bg-indigo-500";
    return isNoteInScale(id)
      ? "basis-1/4 bg-indigo-500/50"
      : "basis-1/4 bg-slate-100";
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
              <button className={getNoteClass(note.id)}>{note.string}</button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
