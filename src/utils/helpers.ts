import { Scale, Note } from "../types";

export function getAccidentalsCount(activeScale: Scale, notes: Note[]): number {
  return (
    activeScale &&
    activeScale.notes
      .map((scaleNote) => {
        return notes.find((note) => note.id === scaleNote);
      })
      .filter((n) => n?.is_accidental).length
  );
}
