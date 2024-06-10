import { useState } from "react";
import classNames from "classnames";
import { shuffle } from "lodash";

import { Note, Scale } from "@types";
import data from "@data";

interface ChallengeGameState {
  notesLeft: number[];
  notesFound: number[];
  shuffledNotes: Note[];
  inProgress: boolean;
  randomScale: Scale;
}

function setUpGameState() {
  const { notes, scales } = data;
  const shuffledNotes: Note[] = shuffle(notes);
  const randomScale: Scale = shuffle(scales).pop() || scales[0];
  const notesInScale: number[] = [...randomScale.notes];
  return {
    shuffledNotes,
    randomScale,
    notesLeft: notesInScale,
    notesFound: [],
    inProgress: true,
  };
}

export default function Challenge() {
  // TODO reset button once game is over?
  // TODO keep score streak in localStorage?
  const [gameState, setGameState] = useState<ChallengeGameState>(
    setUpGameState()
  );
  const { inProgress, notesLeft, notesFound, shuffledNotes, randomScale } =
    gameState;
  const notesLeftCount = notesLeft.length;
  function handleClick(id: number): void {
    const index = notesLeft.indexOf(id);
    if (index > -1) {
      notesLeft.splice(index, 1);
      setGameState((prev) => {
        const updatedNotesFound = [...prev.notesFound];
        updatedNotesFound.push(id);
        return {
          ...prev,
          notesLeft: [...notesLeft],
          notesFound: updatedNotesFound,
        };
      });
      if (![...notesLeft].length) {
        setGameState((prev) => {
          return { ...prev, inProgress: false };
        });
      }
    }
  }

  function resetGame() {
    setGameState(setUpGameState());
  }

  return (
    <>
      {inProgress && (
        <h2 className="text-center">Remaining Notes: {notesLeftCount} </h2>
      )}
      {!inProgress && !notesLeftCount && (
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-center text-xl">You win!</h2>{" "}
          <button
            className="m-4 bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded"
            onClick={resetGame}
          >
            {" "}
            Play again?{" "}
          </button>
        </div>
      )}
      <h2 className="text-center text-xl">
        Scale:{" "}
        <span className="text-green-500 font-bold">{randomScale.name}</span>
      </h2>
      <div className="p-4  flex flex-row justify-center flex-wrap">
        {shuffledNotes.map((note) => {
          return (
            <button
              onClick={() => {
                handleClick(note.id);
              }}
              key={note.id}
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
