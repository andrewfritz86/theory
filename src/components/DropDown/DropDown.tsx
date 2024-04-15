import { ChangeEvent } from "react";

import { Scale } from "../../types";

interface Props {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  scales: Scale[];
}

export default function DropDown({ handleChange, scales }: Props) {
  return (
    <div className="flex mb-8">
      <select
        name="scale"
        id="scale"
        onChange={handleChange}
        className="font-semibold text-lg"
      >
        {scales.map((scale) => (
          <option key={scale.id} value={scale.id}>
            {scale.name}
          </option>
        ))}
      </select>
    </div>
  );
}
