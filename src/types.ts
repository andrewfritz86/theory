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
