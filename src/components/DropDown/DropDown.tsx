import { ChangeEvent } from "react";

import { Scale } from "@types";

interface Props {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  scales: Scale[];
}

export default function DropDown({ handleChange, scales }: Props) {
  return (
    <div className="flex mb-8 text-sky-500/100">
      <label
        className="text-lg font-semibold underline mr-2 font-sans no-underline text-sky-500/100"
        htmlFor="scale"
      >
        Scale:
      </label>
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
