import "./App.css";

import { useState, useEffect } from "react";

import ModeToggle from "@components/ModeToggle/ModeToggle";
import Review from "@components/Modes/Review/Review";
import Challenge from "@components/Modes/Challenge/Challenge";
import ChallengeContextProvider from "@context/challenge";

import { Mode } from "@types";

function App() {
  useEffect(() => {
    console.log(window.location);
  }, []);
  const [activeMode, setActiveMode] = useState(Mode.review);

  return (
    <ChallengeContextProvider>
      <div className="p-4 h-screen flex flex-col justify-center">
        <div>
          <h1 className="text-3xl font-bold text-center mb-12 text-sky-500/100">
            Music Theory Practice
          </h1>
          <ModeToggle activeMode={activeMode} setActiveMode={setActiveMode} />
          {activeMode === Mode.review ? <Review /> : <Challenge />}
        </div>
      </div>
    </ChallengeContextProvider>
  );
}

export default App;
