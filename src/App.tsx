import "./App.css";

import { useState, useEffect } from "react";

import ModeToggle from "@components/ModeToggle/ModeToggle";
import Review from "@components/Modes/Review/Review";
import Challenge from "@components/Modes/Challenge/Challenge";

import { Mode } from "@types";

function App() {
  useEffect(() => {
    // TODO path based routing - React-Router?
  }, []);
  const [activeMode, setActiveMode] = useState(Mode.review);

  return (
    <div className="p-4 h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center mb-12 text-sky-500/100">
          Music Theory Practice
        </h1>
        <ModeToggle activeMode={activeMode} setActiveMode={setActiveMode} />
        {activeMode === Mode.review ? <Review /> : <Challenge />}
      </div>
    </div>
  );
}

export default App;
