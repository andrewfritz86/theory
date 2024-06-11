import classNames from "classnames";
import { Note, NoteState } from "@types";

interface ChallengeNoteProps {
  note: Note;
  handleClick: (id: number) => void;
  noteState: NoteState;
}

export default function ChallengeNote({
  note,
  handleClick,
  noteState,
}: ChallengeNoteProps) {
  const klass = classNames(
    "over:scale-105 transition duration-250 rounded-md m-2 basis-1/4 h-20",
    {
      "bg-green-500": noteState === NoteState.completed,
      "bg-sky-500/50": noteState === NoteState.clean,
      "bg-red-500": noteState === NoteState.failed,
    }
  );
  return (
    <button
      onClick={() => {
        handleClick(note.id);
      }}
      key={note.id}
      className={klass}
    >
      {note.string}
    </button>
  );
}
