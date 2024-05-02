import { useState } from "react";
import classNames from "classnames";
import { shuffle } from "lodash";

import { Note, Scale } from "@types";
import data from "@data";

const { notes, scales } = data;
// this stuff will need to be refs or go in an effect as we will lose it on renders...
const shuffledNotes: Note[] = shuffle(notes);
const randomScale: Scale = shuffle(scales).pop() || scales[0];
const notesInScale: number[] = [...randomScale.notes];

export default function Challenge() {
  const [notesLeft, setNotesLeft] = useState<number[]>(notesInScale);
  const [notesFound, setNotesFound] = useState<number[]>([]);
  const [inProgress, setInprogress] = useState<boolean>(true);
  const notesLeftCount = notesLeft.length;

  function handleClick(id: number): void {
    const index = notesLeft.indexOf(id);
    if (index > -1) {
      notesLeft.splice(index, 1);
      setNotesLeft([...notesLeft]);
      setNotesFound((prev) => {
        const updated = [...prev];
        updated.push(id);
        return [...updated];
      });
      if (![...notesLeft].length) {
        setInprogress(false);
      }
    }
  }
  return (
    <>
      {inProgress && (
        <h2 className="text-center">Remaining Notes: {notesLeftCount} </h2>
      )}
      {!inProgress && !notesLeftCount && (
        <h2 className="text-center text-xl">You win!</h2>
      )}
      <h2 className="text-center text-xl">Scale: {randomScale.name}</h2>
      <div className="p-4  flex flex-row justify-center flex-wrap">
        {shuffledNotes.map((note) => {
          return (
            <button
              onClick={() => {
                handleClick(note.id);
              }}
              className={classNames("rounded-md m-2 basis-1/4 h-20", {
                "bg-green-500": notesFound.includes(note.id),
                "bg-sky-500/50": !notesFound.includes(note.id),
              })}
            >
              {note.string}
            </button>
          );
        })}
      </div>
    </>
  );
}
