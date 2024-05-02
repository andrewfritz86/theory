import classNames from "classnames";
import { Mode } from "@types";

interface Props {
  activeMode: Mode;
  setActiveMode: (mode: Mode) => void;
}

export default function ModeToggle({ activeMode, setActiveMode }: Props) {
  function getButtonClass(mode: Mode) {
    return classNames("p-1", {
      "border-sky-500 border-b-2": activeMode === mode,
    });
  }
  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={() => {
          setActiveMode(Mode.review);
        }}
        className={getButtonClass(Mode.review)}
      >
        Review
      </button>
      <button
        className={getButtonClass(Mode.challenge)}
        onClick={() => {
          setActiveMode(Mode.challenge);
        }}
      >
        Challenge
      </button>
    </div>
  );
}
