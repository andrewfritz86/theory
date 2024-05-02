import classNames from "classnames";

import { Note, Scale } from "@types";

interface NotesProps {
  activeNotes: Note[];
  activeScale: Scale;
}

export default function Notes({ activeNotes, activeScale }: NotesProps) {
  function isNoteInScale(id: number): boolean {
    if (activeScale?.notes.includes(id)) return true;
    return false;
  }

  function mapNotesToLabelsMajor(i: number): string {
    const help = ["I", "ii", "iii", "IV", "V", "VI", "VII"];
    const plusOne = i;

    return help[plusOne];
  }

  function getNoteClass(note: Note): string {
    const { id, is_accidental } = note;
    return classNames("rounded-md m-2", {
      "!bg-orange-400": is_accidental && isNoteInScale(note.id),
      "bg-sky-500": activeScale.root_note_id === id,
      "bg-sky-500/50": isNoteInScale(id) && activeScale.root_note_id !== id,
    });
  }
  return (
    <div className="flex flex-row items-baseline justify-evenly mb-8">
      {activeNotes.map((note, i) => (
        <div className="flex flex-col basis-1/4">
          <button key={note.id} className={getNoteClass(note)}>
            {note.string}
          </button>
          <div className="self-center">{mapNotesToLabelsMajor(i)} </div>
        </div>
      ))}
    </div>
  );
}
