import classNames from "classnames";
import { Mode } from "@types";
import { Link, useLocation } from "react-router-dom";

export default function ModeToggle() {
  const { pathname } = useLocation();

  console.log(pathname);
  function getButtonClass(mode: Mode) {
    return classNames("p-1", {
      "border-sky-500 border-b-2": pathname === mode,
    });
  }
  return (
    <div className="flex justify-center mb-8">
      <Link to="/" className={getButtonClass(Mode.review)}>
        Review
      </Link>

      <Link className={getButtonClass(Mode.challenge)} to="/challenge">
        Challenge
      </Link>
    </div>
  );
}
