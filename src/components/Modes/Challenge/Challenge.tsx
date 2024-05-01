import { useState } from "react";
import { shuffle } from "lodash";

import { Note, Scale } from "@types";
import data from "@data";

export default function Challenge() {
  const { notes, scales } = data;
  // this stuff will need to be refs or go in an effect as we will lose it on renders...
  const shuffledNotes: Note[] = shuffle(notes);
  const randomScale: Scale = shuffle(scales).pop() || scales[0];
  const notesInScale: number[] = [...randomScale.notes];

  // on click, if id is in notes left, turn tile a color and remove said id from array
  const [notesLeft, setNotesLeft] = useState(notesInScale);
  // think about what the default state should be. On load, it's in progress
  const [inProgress, setInprogress] = useState(true);

  const notesLeftCount = notesLeft.length;

  function handleClick(id: number): void {
    const index = notesLeft.indexOf(id);
    if (index > -1) {
      // match. Remove note
      const updated = [...notesLeft.splice(index, 1)];
      setNotesLeft(updated);
    }
  }
  return (
    <>
      <h2>Remaining Notes: {notesLeftCount} </h2>
      <h2>Scale: {randomScale.name}</h2>
      <div className="p-4 h-screen flex flex-row justify-center flex-wrap">
        {shuffledNotes.map((note) => {
          return (
            <button
              onClick={() => {
                handleClick(note.id);
              }}
              className="rounded-md m-2 bg-sky-500 basis-1/4"
            >
              {note.string}
            </button>
          );
        })}
      </div>
    </>
  );
}
