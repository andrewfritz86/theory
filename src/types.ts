export type Note = {
  id: number;
  string: string;
  is_accidental: boolean;
};

export type Scale = {
  name: string;
  id: number;
  notes: number[];
  root_note_id: number;
};

export enum Mode {
  review = "/",
  challenge = "/challenge",
}

export enum NoteState {
  completed = "completed",
  failed = "failed",
  clean = "clean",
}
