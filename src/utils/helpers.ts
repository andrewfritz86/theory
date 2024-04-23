import { Scale, Note } from "../types";

function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

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

export function getNotesInActiveScale(
  notes: Note[],
  activeScale: Scale
): Note[] {
  const found = activeScale.notes.map((scaleNote) => {
    return notes.find((note) => note.id === scaleNote);
  });

  return found.filter(nonNullable);
}
