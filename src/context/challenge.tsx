import React, { createContext, useState } from "react";
export const ChallengeContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export default function ChallengeContextProvider({ children }: Props) {
  const [foo, setFoo] = useState(false);

  return (
    <ChallengeContext.Provider value={{ foo, setFoo }}>
      {children}
    </ChallengeContext.Provider>
  );
}
