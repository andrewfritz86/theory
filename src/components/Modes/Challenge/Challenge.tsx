import { useState } from "react";
import { shuffle } from "lodash";

import { Note, Scale, NoteState } from "@types";
import data from "@data";

import ChallengeNote from "./ChallengeNote/ChallengeNote";

interface ChallengeGameState {
  badNotes: number[];
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
    badNotes: [],
  };
}

export default function Challenge() {
  // TODO reset button once game is over?
  // TODO keep score streak in localStorage?
  const [gameState, setGameState] = useState<ChallengeGameState>(
    setUpGameState()
  );
  const {
    badNotes,
    inProgress,
    notesLeft,
    notesFound,
    shuffledNotes,
    randomScale,
  } = gameState;
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
    } else {
      // bad note
      setGameState((prev) => {
        return {
          ...prev,
          badNotes: [...prev.badNotes, id],
        };
      });
    }
  }

  function resetGame() {
    setGameState(setUpGameState());
  }

  function getNoteState(note: Note): NoteState {
    if (notesFound.includes(note.id)) return NoteState.completed;
    if (!notesFound.includes(note.id) && !badNotes.includes(note.id))
      return NoteState.clean;
    if (badNotes.includes(note.id)) return NoteState.failed;

    return NoteState.clean;
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
            Play again?
          </button>
        </div>
      )}
      <h2 className="text-center text-xl">
        Scale:{" "}
        <span className="text-green-500 font-bold">{randomScale.name}</span>
      </h2>
      <div className="p-4  flex flex-row justify-center flex-wrap">
        {shuffledNotes.map((note) => (
          <ChallengeNote
            key={note.id}
            note={note}
            handleClick={handleClick}
            noteState={getNoteState(note)}
          />
        ))}
      </div>
    </>
  );
}
