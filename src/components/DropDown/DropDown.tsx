import { ChangeEvent } from "react";

import { Scale } from "../../types";

interface Props {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  scales: Scale[];
}

export default function DropDown({ handleChange, scales }: Props) {
  return (
    <select name="scale" id="scale" onChange={handleChange}>
      {scales.map((scale) => (
        <option key={scale.id} value={scale.id}>
          {scale.name}
        </option>
      ))}
    </select>
  );
}
